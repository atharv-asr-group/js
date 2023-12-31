function medicine1get(){
    return new Promise(function(resolve){
        setTimeout(resolve,1000);
    })
}
medicine1get().then(function(){
    console.log('medicine 1 recieved');
})
// if there is a function that is asyncronous then it should
// always return promise. JS folks said this thing.

// after medicine1get is done, whatever function i call in the .then()
// is called.


// equivalent to: in callback way.

// function medicine1get(){
//     console.log('medicine 1 recieved');
// }
// setTimeout(medicine1get,1000);