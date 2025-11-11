let arr1 = [4,5,6];
function printVal(val) {
console.log(val);
}

// for (let i = 0; i < arr.length;i++) {
//printVal(arr[i]);
//}

arr1.forEach(function (val) {
    console.log(val);
});

arr1.forEach((val) => {
    console.log(val);
});

arr1.forEach((val) => 
console.log(val)
);