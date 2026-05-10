let str = "hello world";
console.log(str);
console.log(str.charAt(2));

console.log(str[1]);
console.log(str.substring(0, 4));
console.log(str.substring(2));
console.log(str.substr(2, 5));

let splittedData = str.split(" ");
console.log(splittedData);
console.log(splittedData.length);

for (let i = 0; i < splittedData.length; i++) {
  console.log(splittedData[i]);
}

// convert array into string

console.log(splittedData.join(" "));

let message = "Hello";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.at(2));

console.log(message.length);

let str1 = "hello";
let str2 = "world";
console.log(str1.concat(str2));

console.log("------------------Trim-----------------------");
let data = "  hello world ";
console.log(data.length);
data = data.trimEnd();

console.log(data.length);
console.log(data);