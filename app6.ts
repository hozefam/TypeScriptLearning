interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
  greet(lastName: string): void;
}

function greet3(person: NamedPerson) {
  console.log(`Hi, ${person.firstName} has ${person.hobbies}`);
}

function changeName2(person: NamedPerson) {
  person.firstName = "Anna";
}

const person2 = {
  firstName: "Hozefa",
  age: 30,
  hobbies: ["Cooking", "Sports"],
  greet(lastName: string) {
    console.log(`Hi, I am ${this.firstName} ${lastName}`);
  }
};

greet3(person2);
person2.greet("Mangalorewala");

class Person4 implements NamedPerson {
  firstName: string;
  greet(lastName: string) {
    console.log(`Hi, I am ${this.firstName} ${lastName}`);
  }
}

const person4 = new Person4();
person4.firstName = "Hozefa";
person4.greet("TESTING");

type DoubleTypes = (number1: number, number2: number) => number;

interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

// let myDoubleFunction: DoubleValueFunc;
// myDoubleFunction = function(num1: number, num2: number) {
//   return num1 * num2;
// };

let myDoubleFunction: DoubleValueFunc = (num1: number, num2: number): number =>
  num1 * num2;

console.log(myDoubleFunction(10, 20));
