let num = 1234;
let reverseNumber = 0;
while(num!=0){
    let lastDigit = num%10;
    reverseNumber = reverseNumber * 10 + lastDigit;
    num = Math.floor(num/10);
}
console.log("The reverse of a number is : " + reverseNumber);
