"use strict";
//Type
const msgLog = (a, func) => console.log(a, func);
let g = {
    name: "WDW",
    active: false,
    album: ["Welcome", 123],
};
// console.log(g);
let subtract = function (c, d) {
    return c + d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (a, b) {
    return a * b;
};
let usesubtract = (a, b) => {
    return a - b;
};
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
// msgLog("ADD ALL", addAll(2, 2, 3));
// msgLog("ADD ALL:", addAll(1, 2));
// msgLog("SUM ALL:", sumAll(undefined, 3));
//Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
// msgLog("Rest PARAM: ", total(1, 2));
//never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 10)
            break;
    }
};
//type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen");
};
