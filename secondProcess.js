function logResponseBody(jsonBody){
    console.log(jsonBody);
}
function callback(result){
    result.json().then(logResponseBody);
    // please extract json body from the result and when that is done call the callback function 
}
fetch('http://localhost:3000/?counter=5',{
    method:'GET'
}).then(callback)