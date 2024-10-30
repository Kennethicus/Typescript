let stringArr = ["one", "two", "three"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "4";
stringArr.push("32");

guitars[0] = 1984;
guitars.unshift("Jim");

guitars = stringArr;

let test = [];
let bands: string[] = [];

//Tuple

let myTuple: [string, number, boolean] = ["Dave", 1, true];

let mixed = ["John", 1, false];

//Object

let myObj: object;
myObj = [];
// console.log(typeof myObj);

myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

exampleObj.prop1 = "Hi";

interface Guitarist {
  name?: string;
  active?: boolean;
  album: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  album: [1094, 23442, "2332"],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  album: [1499, 255, "2323"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name?.toUpperCase()}`;
  }
  return "Hello";
};

// console.log(greetGuitarist(jp));

//Enums
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
