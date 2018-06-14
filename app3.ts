class Person {
  name: string;
  private type: string;
  protected age: number = 42;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType("Old Guy");
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person("Hozefa", "hozefam");
console.log(person.name, person.username);
person.printAge();
//person.setType("Cool Guy");

//Inheritance
class Max extends Person {
  name = "Hozefa2";

  constructor(name: string, age: number) {
    super(name, name); //Should be called first
    this.name = name;
    this.age = age;
  }
}

const hozefa = new Max("Anna", 31);
console.log(hozefa.name);
hozefa.printAge();

//Getters and Setters
class Plant {
  private _species: string;

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}

let plant = new Plant();
console.log(plant.species); //Default
plant.species = "AB";
console.log(plant.species); //Default
plant.species = "Shrubs";
console.log(plant.species); //Shrubs

//Static Properties & Methods
class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

//Abstract Classes
abstract class Project {
  projectName: string = "Default";
  budget: number = 1000;
  calcBudget(): number {
    return this.budget * 2;
  }
  abstract changeName(name: string): void;
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

//Private Constructors (Singleton Pattern)
class OnlyOne {
  private static instance: OnlyOne;
  private readonly name: string;

  private constructor(name: string) {
    this.name = name;
  }

  static getName() {
    return OnlyOne.instance.name;
  }

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("The Only One");
    }
    return OnlyOne.instance;
  }
}

let right = OnlyOne.getInstance();
console.log(OnlyOne.getName());
