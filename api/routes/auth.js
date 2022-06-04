const router=require("express").Router();
const User=require("../models/User");
const CryptoJS=require("crypto-js");//To encrypt password
const jwt=require("jsonwebtoken");//To generate Token
const { default: Stripe } = require("stripe");
//Register
router.post("/register",async(req,res)=>{
const newUser=new User({
    email:req.body.email,
    password:CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
});
try{
    const user=await newUser.save();
    res.status(201).json(user);
}
catch(err){
   
res.status(500).json(err);
}

});
//lOGIN
router.post("/login",async(req,res)=>{
    try{
     const user=await User.findOne({email:req.body.email});
     !user && res.status(401).json("Wrong email or Password!!");
     const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
     const originalPassword= bytes.toString(CryptoJS.enc.Utf8);
     originalPassword!== req.body.password && res.status(401).json("Wrong email or Password!!");
     const accessToken=jwt.sign(
         {id:user._id, isAdmin:user.isAdmin},
          process.env.SECRET_KEY,
          {expiresIn:"5d"});

     const {password,...info}=user._doc;
     res.status(200).json({...info,accessToken});

    }catch(err){
        res.status(500).json(err);
    }

});

//Payment
router.post("/payment",async(req,res)=>{
    try{
    const {product,token}=req.body;
     const {password,...info}=user._doc;
     console.log("product",product);
     console.log("price",product.price);
    const idempontencyKey=uuid();
    return stripe.customer.create({
        email:token.email,
        source:token.id

    }).then(customer=>{
        stripe.charges.create({
            amount:product.price*100,
            currency:'usd',
            customer:customer.id,
            receipt_email:token.email,
            description:`purchase of ${product.name}`,   
            shipping:{
                name:token.card.name,
                address:{
                    country:token.card.address.country
                }
            }

        },{idempontencyKey})
    }).then(result=>res.status(200).json(result))
        
        }
    catch(err){
            res.status(500).json(err);
        }
    })



module.exports=router;