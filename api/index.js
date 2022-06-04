const express=require("express");
const app=express();
const dotenv=require("dotenv");
const authRoute=require("./routes/auth");
const userRoute=require("./routes/users");
const MovieRoute=require("./routes/movies");
const ListRoute=require("./routes/lists");
const cors = require("cors");
const stripe=require("stripe")("sk_test_51L3S1IKeZRWSRqtqEzK40FNaHy2jRkcno9VSf8fAGvGuqTKdPWVRnAFNCZlSZNCV3daqywwFLSjwau70C2KscqLe00394A2V7Q");


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
app.use(cors());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/movies",MovieRoute);
app.use("/api/lists",ListRoute);
app.listen(4000,()=>{
    console.log("Backend server is running!!");
})