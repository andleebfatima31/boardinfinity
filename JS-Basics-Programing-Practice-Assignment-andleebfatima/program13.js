// 2,6,12,20,30
function series(n){
    let val=2;
    for(i=2;i<=n;i++){
        val = val + 2*i;
    }
    return val;
}
//console.log(series(5))
