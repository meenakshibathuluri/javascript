//if (true) {
//    var a = 10;
//    let b = 20;
//    const c = 30;
//    console.log(a);
//    console.log(b);
//    console.log(c);
//}

//console.log(a);
//console.log(b);
// console.log(c);

//var variables are function scoped variable
//function x() {
    //var num = 10;
  //  console.log(num);
//}

//x();
//console.log(num);

//variable shadowing

//var a = 10;
//let b = 20;
// const c = 30;


//if (true) {
  // var a = 100;
   //let b = 200;
   //const c = 300;
   //console.log(a);
 //  console.log(b);
  // console.log(c);
//}

// console.log(a);
//console.log(b);
// console.log(c);

//dunction x() {
//var a = 100;
// console.log(a);
// x();
//console.log(a);
//}


function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}

const z = x();
console.log(z);
z();

(function printHello() {
  console.log("hello");
})();

(function addTwoNums (a,b) {
  console.log(a + b);
});

const add = (a,b) => {
  console.log(a + b);
};

const sub = (a,b) => {
  console.log(a - b);
};

function caculator(a,b,fun) {
   fun(a,b);
}

caculator(10, 20, add);
caculator(20, 10, sub);