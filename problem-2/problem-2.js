const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const data = require("./problem-2.1");

app.get("/student/studentList",(req,res)=>{
    res.json(data);
});

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});