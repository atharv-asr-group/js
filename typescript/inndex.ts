function calculateSum(a:number,b: number, type:"sum"|"mul"|"div"):number{
    if(type=="sum"){

        return a+b;
    }
    if(type=="mul"){
        return a*b;
    }if(type=="div"){
        return a/b;
    }
    return -1;
}
calculateSum(2,9,"sum");