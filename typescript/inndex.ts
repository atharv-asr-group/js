interface Circle{
    radius:string
}
interface Square{
    side:string
}
interface Rectangle{
    width:string,
    height:string
}
type Shape=Circle|Square|Rectangle;

function greet(shape:Shape){
console.log('hi');
}
greet({
    radius:"20"
})