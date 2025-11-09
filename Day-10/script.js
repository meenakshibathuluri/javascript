let employee = {
    id: 1,
};
console.log(employee);

let nameOfTheEmployee = "meenakshi";
let key = "name";

employee["name"] = "meenakshi";

console.log(employee);
let companyName = "1234";

employee["companyName"] = companyName;
console.log(employee);

console.log(Object.keys(employee).length);
for (let key in employee) {
    console.log(key + " " + employee[key]);
}
