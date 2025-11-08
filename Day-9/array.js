// In java we can declare array like :
// int[] arr = new int[size];

// In java Script arrays can be declared as follows:
let arr = [1,2,5,7,3,8,4];
console.log(arr);

// printing indexes
console.log(arr[1]); //2
console.log(arr[4]);//3

// array length
console.log(arr.length); //7

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// another method 
console.log("For each example: ")
arr.forEach((i) => console.log(i));

// print sum of array elements

let sum =0;

for(let i=0;i<arr.length;i++){
    sum += arr[i];
}
console.log("sum of array elements is : " + sum);

// array methods

console.log("array methods");

console.log(arr.length);

console.log(arr[3]);

// push -> it adds the element at the end of the array
arr.push(60);
console.log(arr);

// unshift -> it adds the element at the first the the array
arr.unshift(90);
console.log(arr);

//shift -> it removes the 0 th index of the array
arr.shift();
console.log(arr);

//pop -> it removes the at the end of the array element
arr.pop();
console.log(arr);

// merge two arrays
let arr1 = [7,3,6,2];

arr = arr.concat(arr1);
console.log(arr);

arr = arr.slice(arr1);
console.log(arr);
