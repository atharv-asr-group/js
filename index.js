const express= require('express');
const app= express();
const port=3000;
function handleFirstRequest(req,res){
    res.send('hello world')
}
// if we get a request at /, send the control to handlefirstRequest function.
app.get('/',handleFirstRequest)
function started(){
    console.log('example hosted on port 3000')
}
app.listen(port,started);
// this code is sufficient to sort of create a website.


