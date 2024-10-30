"use strict";
// class Bible {
//   secondLang!: string; // "!" certain we know what we doing where just not going to initialize this right away
class Person {
    constructor(name, scripture) {
        this.name = name;
        this.scripture = scripture;
    }
    read(action) {
        return `${this.name} ${action} the ${this.scripture}`;
    }
}
const Page = new Person("Jesus", "I Am");
console.log(Page.read("Revelation"));
// ?
// class P {
//   static count: number = 0;
//   static getCount(): number {
//     return P.count;
//   }
//   public id: number;
//   constructor(public name: string) {
//     this.name = name;
//     this.id = ++P.count;
//   }
// }
// const J = new P("J");
// const X = new P("X");
// const Y = new P("Y");
// console.log("P: ", P.count);
// console.log("X: ", X.id);
//? SET AND GET
class Disciples {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) &&
            value.every((element) => typeof element === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error(`Param is not an array of strings`);
    }
}
const People = new Disciples();
People.data = ["Peter", "Andrew", "James"];
console.log(People.data);
People.data = [...People.data, "John"];
console.log(People.data);
