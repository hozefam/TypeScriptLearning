//Exercise 1

class Car {
  acceleration: number = 0;

  honk(): void {
    console.log("Tooooooot!");
  }

  accelerate(speed: number): void {
    this.acceleration += speed;
  }

  constructor(private name: string) {
    this.name = name;
  }
}

const car2 = new Car("BMW");
car2.honk();
console.log(car2.acceleration);
car2.accelerate(10);
console.log(car2.acceleration);

//Exercise 2
abstract class BaseObject {
  protected width: number = 0;
  protected length: number = 0;
  abstract calcSize(): number;
}

class Rectangle extends BaseObject {
  constructor(width: number, length: number) {
    super();
    this.width = width;
    this.length = length;
  }
  calcSize(): number {
    return this.width * this.length;
  }
}
const rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());

//Exercise 3
class Person3 {
  private _firstName: string = "";
  get firstName(): string {
    return this._firstName;
  }
  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = "";
    }
  }
  enumerable: boolean = true;
  configurable: boolean = true;
}
const person3 = new Person3();
console.log(person3.firstName);
person3.firstName = "Ho";
console.log(person3.firstName);
person3.firstName = "Hozefa";
console.log(person3.firstName);
