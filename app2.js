"use strict";
//let and const
console.log("LET AND CONST");
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99;
//block scope
function reset() {
    //console.log(variable);
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
//Arrow Functions
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(2, 10));
var multiplyNumbers = function (number1, number2) {
    return number1 * number2;
};
console.log(multiplyNumbers(10, 2));
var greet = function () {
    console.log("Hello");
};
greet();
var greetFriend = function (friendName) { return console.log("Hello " + friendName); };
greetFriend("Hozefa");
//Default Parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start, end) {
    if (start === void 0) { start = 10; }
    if (end === void 0) { end = start - 5; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done ", start);
};
countdown();
//Rest and Spread Operator
console.log("REST AND SPREAD OPERATOR");
var numbers = [1, 10, 99, -5];
console.log(Math.max.apply(Math, numbers));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(name);
    return args;
}
console.log(makeArray("tst", 1, 4, 6, 3, 99, -3, 1, 0));
//Destructuring
console.log("DESTRUCTURING");
var myHobbies = ["Cooking", "Sports"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userData2 = { username: "Hozefa", age: 35 };
var username = userData2.username, age = userData2.age;
console.log(username, age);
//Template Literals
var userName = "Hozefa";
var greeting = "Hello, \n" + userName;
console.log(greeting);
