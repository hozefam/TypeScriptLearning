//let and const
console.log("LET AND CONST");
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99;

//block scope
function reset() {
  //console.log(variable);
  let variable = null;
  console.log(variable);
}
reset();
console.log(variable);

//Arrow Functions
console.log("ARROW FUNCTIONS");
const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2;
};

console.log(addNumbers(2, 10));

const multiplyNumbers = (number1: number, number2: number): number =>
  number1 * number2;

console.log(multiplyNumbers(10, 2));

const greet = () => {
  console.log("Hello");
};

greet();

const greetFriend = friendName => console.log("Hello " + friendName);

greetFriend("Hozefa");

//Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10, end: number = start - 5): void => {
  console.log(start);
  while (start > 0) {
    start--;
  }
  console.log("Done ", start);
};
countdown();

//Rest and Spread Operator
console.log("REST AND SPREAD OPERATOR");
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));

function makeArray(name: string, ...args: number[]) {
  console.log(name);
  return args;
}

console.log(makeArray("tst", 1, 4, 6, 3, 99, -3, 1, 0));

//Destructuring
console.log("DESTRUCTURING");
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData2 = { username: "Hozefa", age: 35 };
const { username, age } = userData2;
console.log(username, age);

//Template Literals
const userName = "Hozefa";
const greeting = `Hello, 
${userName}`;
console.log(greeting);
