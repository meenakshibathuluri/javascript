
// Functions

// syntax

/* function functionName(parameters){
console.log(condition);
}
functionName(arguments); */

function addNumber(a,b){
    console.log(a+b);
}
addNumber(60,70);

function print(){
    console.log("Hello");
}
print();

// again calling same funtion name with different codition
function prints(names){
    return names.toUpperCase(); 
}
console.log(prints("Jock and Rock"));

function add(a){
    console.log(a+1);
}
add(130);

// count vowels

function countVowels(str){
    str = str.toLowerCase();

    let count = 0;

    for(let i=0;i<str.length;i++){
        if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u'){
            count++;
        }
    }

     console.log(count);
    
}
countVowels("Hello rock star");

// another method 
let addTwoNumbers = function (a,b){
    console.log(a+b);
}
addTwoNumbers(50,10);
