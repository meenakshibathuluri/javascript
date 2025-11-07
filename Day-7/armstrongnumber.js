let num = 153;
let backup = num;
let sum = 0;
while(num != 0){
    let lastDigit = num%10;
    sum += (lastDigit * lastDigit * lastDigit);
    num = Math.floor(num/10);
}
if(backup === sum){
    console.log("Armstrong number");
}
else{
    console.log("Not a Armstrong number")
}
