function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class Person5 {
  constructor() {
    console.log("Hi");
  }
}

//Factory
function logging(value: boolean) {
  return value ? logged : null;
}

const logging2 = (value: boolean) => (value ? logged : null);

@logging2(true)
class Car2 {}

//Advanced
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}

@logging2(true)
@printable
class Plant2 {
  name = "Green Plant";
}

const plant2 = new Plant2();
(<any>plant2).print();
