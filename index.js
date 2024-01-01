const express= require('express');
const app= express();
const port=3000;

function calculateSum(counter){
    var sum=0;
    for(var i=0;i<counter;i++){
        sum=sum+i;
    }
    return sum;
}

function handleFirstRequest(req,res){
    const counter=req.query.counter;

    var calculatedSum=calculateSum(counter);
    console.log(calculatedSum);
    const answer='the answer is '+calculatedSum
    res.send(answer);
}
// if we get a request at /, send the control to handlefirstRequest function.
app.get('/',handleFirstRequest)
function started(){
    console.log('example hosted on port 3000')
}
app.listen(port,started);
// this code is sufficient to sort of create a website.


