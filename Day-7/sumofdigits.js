let num = 123;
let sum = 0;
while(num != 0) {
    sum += sum % 10;
    num = Math.floor(num / 10);
    console.log("num",num);
}
   console.log("sum is",sum);
