"use strict";
//provides a  placholder or type varible
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
// console.log(isObj({ name: "Hello" }));
// console.log(isObj("Hello"));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue([1, 2, 3]));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    //process user with logic
    return user;
};
console.log(processUser({ id: 1, name: "Ken" }));
// console.log(processUser({ name: "Dave" }));
// ? more complex
const getUserProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const usersArray = [
    {
        id: 1,
        name: "God the Father",
        title: "Alpha and the Omega",
        message: "Follow Me",
        bible: {
            chapter1: "The beginning",
            chapter2: "My Rock",
            chapter3: "My fortress",
            chapter4: "My Saviour",
            loc: {
                heaven: "Holy Holy Holy",
            },
        },
    },
    {
        id: 2,
        name: "Lord Yeshua",
        title: "Lord, God, and Saviour",
        message: "Follow Me",
        bible: {
            chapter1: "The Word",
            chapter2: "Agape",
            chapter3: "The Sheperd",
            chapter4: "The Truth",
            loc: {
                heaven: "God's right hand",
            },
        },
    },
];
console.log(getUserProperty(usersArray, "title"));
console.log(getUserProperty(usersArray, "name"));
//? generic in a class
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "John";
// store.state = 12;
const myState = new StateObject([15]);
myState.state = ["John", 25, true];
console.log(myState.state);
