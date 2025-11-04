let n = 11;
let factorsCount=0;

for(let i=1;i<=n;i++){
    if(n%i==0){
        factorsCount++;
    }
}

if(factorsCount==2){
    console.log(n + " Is a prime number");
}else{
    console.log(n + " Is not a prime number");
}