function fact(n){
    var fact = 1;
    for(var i=n;i>0;i--){
        fact = fact*i;
    }
    return fact;
}
 //console.log(fact(5))