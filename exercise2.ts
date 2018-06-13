//Exercise 1 - As arrow function
const double = (value: number): number => value * 2;
console.log(double(10));

//Exercise 2 - Default Params
const greet2 = (name: string = "Max") => console.log(`Hello ${name}`);
greet2();
greet2("Hozefa");

//Exercise 3
var numbers2 = [-3, 33, 38, 5];
console.log(Math.min(...numbers2));

//Exercise 4
const newArray = [55, 20];
newArray.push(...numbers2);
console.log(newArray);

//Exercise 5
var testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

//Exercise 6
const scientist = { firstName: "Hozefa", experience: 12 };
const { firstName, experience } = scientist;
console.log(firstName, experience);
