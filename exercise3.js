"use strict";
//Exercise 1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Tooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car2 = new Car("BMW");
car2.honk();
console.log(car2.acceleration);
car2.accelerate(10);
console.log(car2.acceleration);
//Exercise 2
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());
//Exercise 3
var Person3 = /** @class */ (function () {
    function Person3() {
        this._firstName = "";
        this.enumerable = true;
        this.configurable = true;
    }
    Object.defineProperty(Person3.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person3;
}());
var person3 = new Person3();
console.log(person3.firstName);
person3.firstName = "Ho";
console.log(person3.firstName);
person3.firstName = "Hozefa";
console.log(person3.firstName);
