var counter =1;
function printCounter(){
    console.log(counter);
    counter++;
}
setInterval(printCounter, 1000);
var counter2=1;
for(var i=0;i<1000;i++){
    counter2++;
}
console.log(counter2);