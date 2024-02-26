const dot =require("dotenv");

const express=require("express");
const app=express();
const userroutes=require("./Routes/userRoutes");
const connectDB =require("./config/db");


dot.config();
connectDB();

app.use(express.json());


app.use('/user',userroutes);

app.get("/",(req,res)=>{
res.send("hi there")
})
 





app.listen(process.env.PORT,()=>{
    console.log("working fine");
});
