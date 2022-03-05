const express = require("express");
const cors =require('cors');

const app=express();

var corOptions={
    origin:'https://localhost:8081'
}


//middleware

app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

//router

const userRouter=require('./routes/userRoutes.js');
const categoryRouter=require('./routes/categoryRoutes.js')

app.use('/api/user',userRouter);
app.use('/api/category',categoryRouter);

//testing api

app.get('/',(req,res)=>{
    res.json({message:"Hello from Api"});
})


//port

const PORT= process.env.PORT || 8000;

//server

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})