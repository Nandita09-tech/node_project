const express= require('express');
const app= express();
require('dotenv').config();

const fs= require ('fs').promises;

const port= process.env.port || 3000;

app.get('/',async(req,res)=>{
    try{
        const filename= 'example.txt';
        const content= "this is simple text.";
         // write in file
         await fs.writeFile(filename,content,'utf-8') ;
         res.send(content);


       // const data= await fs.readFile('example.txt','utf-8');
       // res.send(data);
    } catch (error){
        console.log("soimething went wrong", error);
        res.status(500).send("Internet Server error ");
    }
})

app.listen (port,()=>{
    console.log(`connected at port ${port}`);
})