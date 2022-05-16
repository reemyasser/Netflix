const express=require("express");
const app=express();
const dotenv=require("dotenv");
const authRoute=require("./routes/auth");
const userRoute=require("./routes/users");
dotenv.config();

//MongoDB Connection
const mongoose=require("mongoose");
mongoose.connect(process.env.MONGO_URL,
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("DB connection successfull!!"))
.catch((err)=>console.log(err));
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.listen(4000,()=>{
    console.log("Backend server is running!!");
})