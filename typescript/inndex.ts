function swap<T,U>(a:T,b:U):[U,T]{
    return [b,a];
}
console.log(swap(1,'bye'));
console.log(swap(1,2));