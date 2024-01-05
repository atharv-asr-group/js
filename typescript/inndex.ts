interface Persongender{
    gender:string,
    orientation:string,
    pronouns:string
}
interface Person{
    name:string,
    age:number,
    gender: Persongender
}
function greet(person:Person){
    return "hi "+person.name+" you are "+person.age+" years old. your gender is "+person.gender.pronouns;
}
// function greet(person: {
//     name:string,
//     age:number;
// }):string{return "hi "+person.name+" how are you congrats on being "+person.age+" years old"}
console.log(greet({
    name:"atharv",
    age:20,
    gender:{
        gender:"male",
        orientation:"straight",
        pronouns:"he/him"
    }
}));