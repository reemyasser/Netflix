import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout'
import './payment.css'
import "bootstrap/dist/css/bootstrap.min.css";
import '../register/register.css'
import { width } from '@mui/system';

const Payment=({email,password})=>{
    const product=[{
        id:1,
        name:"Basic",
        price:10,
        productBy:"Netflix",
        quality:"Good",
        resolution:"480p"
    },{
        id:2,
        name:"Standard",
        price:20,
        productBy:"Netflix",
        quality:"Better",
        resolution:"1080p"
    },
    {
        id:3,
        name:"Premium",
        price:30,
        productBy:"Netflix",
        quality:"Best",
        resolution:"4k+HDR"

    }];
const navigate=useNavigate();
const makePayment=token=>{
const body={
    token,
    product,
}
const headers={
    "Content-Type":"application/json"
}
return fetch(
    `http://localhost:4000/api/auth/payment`,{
        method:'POST',
        headers,
        body:JSON.stringify(body)
    }).then(()=>{
        const data = {email:email,password:password};
        console.log(data);
        const myRequest = new Request('http://localhost:4000/api/auth/register', {
            method: 'POST',
            headers:{
              'Content-Type':'application/json',
            },  
            body:JSON.stringify(data),
          });
          try{
           
             fetch(myRequest)
             .then(()=>{navigate('/login')})
            .catch((err)=>console.log("error"+ err))
          }
          catch(err){
            console.log(err)
          }
       
    }).catch(error=>alert(error))
   }
    return (
        <div className="register ">
        <div className="top">
           <div className="wrapper">
             <img
               className="logo"
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
               alt=""
             />
            
           
        </div>
        </div>
        <div className="container2">
            <div className="details">
                <p>Quality</p>
                <p>Resolution</p>
            </div>
           
            {product.map(item=>(
             <div  key={item.id}>
                { 
            <StripeCheckout
           
             stripeKey="pk_test_51L3S1IKeZRWSRqtqYZNbE3a8adhq2kwKGA6CklPlXMkQQoXJAP9my1eTY0uWCi6i2GzknDX0CufKnYUeg69VbyvW00UYzs12yA"
             token={makePayment}
             name="Subscripe"
             amount={item.price*100}
            
             >
         
             <div className="card-body" >
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.quality}</p>
              <p className="card-text">{item.resolution}</p>
             <button className="subscripe">Subscripe for {item.price}$</button>
             </div>
           
              
           </StripeCheckout>}
           </div>))}

           </div>
        
      
        </div>
       
    );
}

export default Payment;