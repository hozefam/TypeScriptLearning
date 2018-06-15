"use strict";
var MyMath;
(function (MyMath) {
    var Rectangle;
    (function (Rectangle) {
        function calculateRectangle(width, length) {
            return width * length;
        }
        Rectangle.calculateRectangle = calculateRectangle;
    })(Rectangle = MyMath.Rectangle || (MyMath.Rectangle = {}));
})(MyMath || (MyMath = {}));
