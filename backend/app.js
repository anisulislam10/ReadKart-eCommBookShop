const express=require("express");
const app=express();
require('dotenv').config();
require("./config/config");

//port create
const PORT=process.env.SERVER_PORT || 5000 ;

app.get("/check_conn",(req,res)=>{

        res.json({
        message:"ReadKart Server is Working Properly....",
        status: "✔",
        port: `**${PORT}`

        })
})

app.listen(PORT,()=>{
        console.log('***------------------------------***')
        console.log(`***  Server Started at Port ${PORT} ***`);
        console.log('***------------------------------***')

        
})