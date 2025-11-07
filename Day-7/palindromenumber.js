let num=56765;
let backup=num;
let reverseNumber = 0;
while(num!=0){
    let lastDigit = num %10;
    reverseNumber = reverseNumber *10 + lastDigit;
    num = Math.floor(num / 10);
}

if(backup === reverseNumber){
    console.log(backup + " Is a palindrome number ");
}else{
    console.log(backup + " Is not a palindrome number ")
}