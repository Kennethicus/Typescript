"use strict";
let stringArr = ["one", "two", "three"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "4";
stringArr.push("32");
guitars[0] = 1984;
guitars.unshift("Jim");
guitars = stringArr;
let test = [];
let bands = [];
//Tuple
let myTuple = ["Dave", 1, true];
let mixed = ["John", 1, false];
//Object
let myObj;
myObj = [];
// console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "Hi";
let evh = {
    name: "Eddie",
    active: false,
    album: [1094, 23442, "2332"],
};
let jp = {
    name: "Jimmy",
    active: true,
    album: [1499, 255, "2323"],
};
const greetGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
    }
    return "Hello";
};
// console.log(greetGuitarist(jp));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
