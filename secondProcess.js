function callback(result){
    console.log(result.status);
}
fetch('http://localhost:3000/?counter=5',{
    method:'GET'
}).then(callback)