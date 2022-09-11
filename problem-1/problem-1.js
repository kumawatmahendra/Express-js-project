const express = require('express');
const app = express();

const fs = require('fs');

app.get('/student/getdetail', (req, res) => {
    fs.readFileSync('problem-1.json',"utf-8",(err,data)=> {
        if(err){
            return err;
        }
        res.end(data);
    });
});

app.get('/student/add',(req,res)=> {
    const newObject = {
        studentFirstName:req.query.studentFirstName,
        collegeName:req.query.collegeName,
        location:req.query.location
    } 
    
        const JSON_Data = JSON.stringify(newObject,null,2);
 
    
        fs.appendFileSync('problem-1.json',"\n" + JSON_Data,(err) =>{
        
        if(err){
            return err;
        } 

  });

        const resultdata = {
            "result":"Success"
        } 
        const JSON_response = JSON.stringify(resultdata); 
        res.end(JSON_response); 
})

// const port = 5000;
app.listen(3000)
    console.log(`Server is running on 3000`);