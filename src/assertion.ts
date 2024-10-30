type One = string;
type Two = string | number;
type Three = "Hello";

// convert to more or less specific

let a: One = "hello";
let b = a as Two; //less specific
let c = a as Three; //more specific

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

// Be careful! TS sees no problem - but a string os returned
let myVal: string = addOrConcat(2, 2, "concat") as string;
let nextVal: number = addOrConcat(2, 2, "concat") as number;
console.log(nextVal);

// the DOM

const img = document.querySelector("img") as HTMLImageElement;
const myImg = document.querySelector("#img")! as HTMLImageElement; // non null assertion '!'
const nextImg = <HTMLImageElement>document.querySelector("#img"); // will not work on TSX

// img.src;
// myImg.src;
