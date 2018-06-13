"use strict";
//Exercise 1 - As arrow function
var double = function (value) { return value * 2; };
console.log(double(10));
//Exercise 2 - Default Params
var greet2 = function (name) {
    if (name === void 0) { name = "Max"; }
    return console.log("Hello " + name);
};
greet2();
greet2("Hozefa");
//Exercise 3
var numbers2 = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers2));
//Exercise 4
var newArray = [55, 20];
newArray.push.apply(newArray, numbers2);
console.log(newArray);
//Exercise 5
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
//Exercise 6
var scientist = { firstName: "Hozefa", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
