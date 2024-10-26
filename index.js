var n=prompt("enter size of pyramid, output will be shown in console")
var i;
var j;
var k=1;
var result;
for(i=1;i<=n;i++){
    result=""
    k=1;
    for(j=1;j<=i;j++){
        result +=k + " ";
        k+=2;
    }
    console.log(result)
}