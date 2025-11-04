let  n = 10;
let factorsCount=0;

for(let i=1;i<=n;i++){
    if(n%i==0){
        factorsCount++;
    }
}
console.log(factorsCount);