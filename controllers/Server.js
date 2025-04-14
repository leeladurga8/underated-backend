const express = require ('express')
const app = express();
const port =5000;
const users =[{
    id:1,
    fullname:"vanitha",
    emailId: "movieimdb@gmail.com",
    password: "abcd@123"
}]

app.get('/',(req,res) =>{
    res.send (JSON.stringify(users));
})
app.get('/users/:id',(req,res) =>{
    console.log(req.params);
    res.send("ok");
    
})
app.listen(port ,(req,res) =>{
    console.log("server is running http://localhost:5000");
    
})