// string
// number
// boolean

// array
// object

// any

// Literal type
let myName = "Bay";
myName = "Bo";

let age = 20;

let favColor: string;
favColor = "red";

const add = (num1: number, num2: number = 5): number => {
  return num1 + num2;
};

const result = add(1, 2);

console.log(result); // 4

type Person = {
  name: string;
  age: number;
  hobbies: string[];
  favNumbers: Array<number>;
};

const person: Person = {
  name: "Bay",
  age: 20,
  hobbies: ["cooking", "eating"],
  favNumbers: [1, 2, 3, 4, 5],
};

// type Person = {
//   name: string;
//   age: number;
//   hobbies: string[];
//   favNumbers: Array<number>;
// };

// const person: Person = {
//   name: "Bay",
//   age: 20,
//   hobbies: ["cooking", "eating"],
//   favNumbers: [1, 2, 3, 4, 5],
// };

// Union Type
type DynamicAge = string | number | boolean;

const friend10: DynamicAge = "500";
const friend11: DynamicAge = 500;

//Intersection
type Kid = {
  name: string;
  age: number;
};

type Nickname = {
  nickname: string;
};

const human: Kid & Nickname = {
  name: "Dek",
  age: 5,
  nickname: "Ba",
};

const friend1: DynamicAge = "Oil";
const friend2: DynamicAge = 50;

type NestedObject = {
  mom: { name: string; age: number; children: string[]; x: { key1: string } };
};

// Literal
type Gender = "female" | "male";

const bay: Gender = "male";

// Skip Tuple and ENUM

const greeting = (data: string | number): void => {
  console.log(data);
};

const logging = (data: string | number): never => {
  throw new Error("Error");
};

fetch("www.google.com");

type MyType = string | boolean | "GuEngNa";
type MyType2 = {
  name: string;
  age: number;
  isMarried: boolean;
  me: Person;
  greeting: (text: string) => void;
  add: (num1: number, num2: number) => number;
};

interface AdultPerson {
  name: string;
  age: number;
  isMarried: boolean;
  // me: Person;
  // greeting: (text: string) => void;
  // add: (num1: number, num2:number) => number
}

interface RichPerson {
  isRich: boolean;
}

type Mix = AdultPerson & RichPerson;

class BayFamily implements AdultPerson, RichPerson {
  name = "";
  age = 0;
  isMarried = false;
  isRich = false;

  constructor(name: string, age: number, isMarried: boolean) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }
}
