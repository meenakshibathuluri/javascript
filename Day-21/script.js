let value1;
console.log(value1); // undefined

console.log(value2); // not defined

var value2 = 10;


function printHello() {
    console.log("Hello");
}

function myfunction(printHello) {
    console.log();
}

myfunction(printHello); // no printHello() we are calling the function 

//call back function
myfunction(() => {
    console.log("Hello");
});

// settime out

console.log("1");
console.log("2");
console.log("3");

function Hello() {
    console.log("Hello")
}

//setTimeout(Hello, 3000);// function timeout(delay time)

setTimeout(() => {
    console.log("meenakshi");
    console.log("D/o gopal");
}, 3000);

function sum(a,b) {
    console.log(a + b);
}

function sub(a,b) {
    console.log(a - b);
}

function calculator(a,b, calcfunction) {
    calcfunction(a,b);
}
calculator(10,20,sum);
calculator(10,20,sub);