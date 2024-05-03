mirror=function(x){
    if (! Array.isArray(x)){
        console.log("A")
        return x
    }
    if(x.length==0){
        console.log("B")
        return []
    }
    console.log("C")
    return mirror(x.slice(1)).concat([mirror(x[0])])
}
console.log(mirror(1));
console.log(mirror([]));
console.log(mirror([1]));