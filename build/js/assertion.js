"use strict";
// convert to more or less specific
let a = "hello";
let b = a; //less specific
let c = a; //more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
// Be careful! TS sees no problem - but a string os returned
let myVal = addOrConcat(2, 2, "concat");
let nextVal = addOrConcat(2, 2, "concat");
console.log(nextVal);
// the DOM
const img = document.querySelector("img");
const myImg = document.querySelector("#img"); // non null assertion '!'
const nextImg = document.querySelector("#img"); // will not work on TSX
// img.src;
// myImg.src;
