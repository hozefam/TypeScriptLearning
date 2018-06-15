"use strict";
function greet3(person) {
    console.log("Hi, " + person.firstName + " has " + person.hobbies);
}
function changeName2(person) {
    person.firstName = "Anna";
}
var person2 = {
    firstName: "Hozefa",
    age: 30,
    hobbies: ["Cooking", "Sports"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
greet3(person2);
person2.greet("Mangalorewala");
var Person4 = /** @class */ (function () {
    function Person4() {
    }
    Person4.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Person4;
}());
var person4 = new Person4();
person4.firstName = "Hozefa";
person4.greet("TESTING");
// let myDoubleFunction: DoubleValueFunc;
// myDoubleFunction = function(num1: number, num2: number) {
//   return num1 * num2;
// };
var myDoubleFunction = function (num1, num2) {
    return num1 * num2;
};
console.log(myDoubleFunction(10, 20));
