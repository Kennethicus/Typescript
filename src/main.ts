//Type

type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

const msgLog = (a: string, func: any) => console.log(a, func);

type Guitarist1 = {
  name?: string;
  active?: boolean;
  album: stringOrNumberArray;
};

type UserId = stringOrNumber;

let g: Guitarist1 = {
  name: "WDW",
  active: false,
  album: ["Welcome", 123],
};

// console.log(g);

let subtract = function (c: number, d: number): number {
  return c + d;
};

type mathFunction = (a: number, b: number) => number;

// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (a, b) {
  return a * b;
};
// console.log(multiply(10, 3));

type subtractFunc = (a: number, b: number) => number;

let usesubtract: subtractFunc = (a, b) => {
  return a - b;
};

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

// msgLog("ADD ALL", addAll(2, 2, 3));
// msgLog("ADD ALL:", addAll(1, 2));
// msgLog("SUM ALL:", sumAll(undefined, 3));

//Rest parameters

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

// msgLog("Rest PARAM: ", total(1, 2));

//never type

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 10) break;
  }
};

//type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen");
};
