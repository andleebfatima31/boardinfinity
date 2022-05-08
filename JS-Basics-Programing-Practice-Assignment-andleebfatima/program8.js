function removeWhiteSpace(a){
    let tmp = "";
    for(i in a){
        if(a[i]!==" "){
            tmp += a[i];
        }
    }
    return tmp.length;
}
// console.log(removeWhiteSpace("Lorem Ipsum"));