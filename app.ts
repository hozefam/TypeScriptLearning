//string
let myName: string = "Hozefa";

//number
let myAge: number = 35;

//boolean
let hasHobbiles: boolean = false;
//hasHobbiles = 1;

// assign types
let myRealAge: number;
myRealAge = 10;

//array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];
console.log(hobbies[0]);
console.log(typeof hobbies);

//tuples
let address: [string, number] = ["Superstreet", 100];
console.log(address["0"]);

//enum
enum Color {
  None = -1,
  Red = 0,
  Blue,
  Green,
  Default = 99
}
let myFavColor: Color = Color.Green;
console.log(myFavColor);

//any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.table(car);

//functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

//void
function sayHello(): void {
  console.log("Hello");
  //return 1;
}
console.log(sayHello());

//argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

console.log(multiply(10, 2));

//function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(20, 10));

//objects
let userData: { name: string; age: number } = {
  name: "Hozefa",
  age: 27
};
console.log(`${userData.name} is of ${userData.age} years old`);

//Complex Object
let complex: { data: any[]; output: (all: boolean) => number[] } = {
  data: [100, 2.99, 19],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

//type alias
type Complex = { data: any[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 2.99, 19],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

//union types
type Age = string | number;
type YesNo = string | boolean | number;
let myRealRealAge: Age = 27;
myRealRealAge = "27";

let yesNo: YesNo = "true";
yesNo = 1;
yesNo = true;

//check types
let finalValue: any = "A String";
finalValue = 10;
if (typeof finalValue == "string") {
  console.log("Final value is a string");
} else if (typeof finalValue == "number") {
  console.log("Final value is a number");
}

//never type
function neverReturns(): never {
  throw new Error("An Error");
}

neverReturns();

//nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
