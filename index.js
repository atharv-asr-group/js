var counter =1;
function printCounter(){
    console.log(counter);
    counter++;
}
setInterval(printCounter, 1000);