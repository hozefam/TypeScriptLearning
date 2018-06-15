//Simple Generic
function echo(data: any) {
  return data;
}

console.log(echo("Hozefa").length);
console.log(echo(27));
console.log(echo({ name: "Hozefa", age: 27 }));

//Better Generic
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho<string>("Hozefa").length);
console.log(betterEcho<number>(27));
console.log(betterEcho<object>({ name: "Hozefa", age: 27 }));

//builtin Generics
const testResults1: Array<number> = [1.94, 2.33];
testResults1.push(-2.44);
// testResults1.push("test");
console.log(testResults1);

//Arrays
function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element));
}

printAll<string>(["Apple", "Banana"]);

//Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("Testing"));

//Generic Classes
class SimpleMath<T extends number, U extends number | string> {
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<number, string>();
simpleMath.baseValue = 20;
simpleMath.multiplyValue = "20";
console.log(simpleMath.calculate());
