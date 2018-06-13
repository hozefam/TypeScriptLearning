"use strict";
//string
var myName = "Hozefa";
//number
var myAge = 35;
//boolean
var hasHobbiles = false;
//hasHobbiles = 1;
// assign types
var myRealAge;
myRealAge = 10;
//array
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
console.log(hobbies[0]);
console.log(typeof hobbies);
//tuples
var address = ["Superstreet", 100];
console.log(address["0"]);
//enum
var Color;
(function (Color) {
    Color[Color["None"] = -1] = "None";
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Default"] = 99] = "Default";
})(Color || (Color = {}));
var myFavColor = Color.Green;
console.log(myFavColor);
//any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.table(car);
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log("Hello");
    //return 1;
}
console.log(sayHello());
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(10, 2));
//function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(20, 10));
//objects
var userData = {
    name: "Hozefa",
    age: 27
};
console.log(userData.name + " is of " + userData.age + " years old");
//Complex Object
var complex = {
    data: [100, 2.99, 19],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 2.99, 19],
    output: function (all) {
        return this.data;
    }
};
var myRealRealAge = 27;
myRealRealAge = "27";
var yesNo = "true";
yesNo = 1;
yesNo = true;
//check types
var finalValue = "A String";
finalValue = 10;
if (typeof finalValue == "string") {
    console.log("Final value is a string");
}
else if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
//never type
function neverReturns() {
    throw new Error("An Error");
}
neverReturns();
//nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
