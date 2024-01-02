const jwt =require('jsonwebtoken');
console.log(jwt);
const secret='supersecf3t';
const ans=jwt.sign('atharvf14t@gmail.com',secret);
console.log(ans);
jwt.verify(ans,secret,(err,decoded)=>{
    console.log(decoded);
});
