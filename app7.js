"use strict";
//Simple Generic
function echo(data) {
    return data;
}
console.log(echo("Hozefa").length);
console.log(echo(27));
console.log(echo({ name: "Hozefa", age: 27 }));
//Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Hozefa").length);
console.log(betterEcho(27));
console.log(betterEcho({ name: "Hozefa", age: 27 }));
//builtin Generics
var testResults1 = [1.94, 2.33];
testResults1.push(-2.44);
// testResults1.push("test");
console.log(testResults1);
//Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Banana"]);
//Generic Types
var echo2 = betterEcho;
console.log(echo2("Testing"));
//Generic Classes
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 20;
simpleMath.multiplyValue = "20";
console.log(simpleMath.calculate());
