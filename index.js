const express= require('express');
const bodyParser=require('body-parser');
const app= express();
const port=3000;
app.use(bodyParser.json());




function calculateSum(counter){
    var sum=0;
    for(var i=0;i<counter;i++){
        sum=sum+i;
    }
    return sum;
}

function handleFirstRequest(req,res){
    
    res.sendFile(__dirname+'/index.html');
}

// if we get a request at /, send the control to handlefirstRequest function.
app.get('/',handleFirstRequest)
function started(){
    console.log('example hosted on port 3000')
}
app.listen(port,started);
// this code is sufficient to sort of create a website.


