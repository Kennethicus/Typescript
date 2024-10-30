// class Bible {
//   secondLang!: string; // "!" certain we know what we doing where just not going to initialize this right away

//   //visibility modifiers
//   constructor(
//     public readonly name: string,
//     readonly music: string,
//     private age: number,
//     protected lang: string = "Israelites"
//   ) {
//     this.name = name;
//     this.age = age;
//     this.music = music;
//     this.lang = lang;
//   }

//   public getAge() {
//     return `Hello, I'm ${this.age}`;
//   }
// }

// const Person = new Bible("David", "PSALMS", 23);

// console.log(Person);
// console.log(Person.getAge());
// console.log(Bible.age);
// console.log(Bible.lang);

// class Chapter extends Bible {
//   constructor(public verse: string, name: string, music: string, age: number) {
//     super(name, music, age);
//     this.verse;
//   }

//   public getLang() {
//     return `I write ${this.lang}`;
//   }
// }

// const David = new Chapter(
//   "PROVERBS 20: 21",
//   "Lord and Saviour Jesus Christ",
//   "PSALMS",
//   24
// );
// console.log(David.getLang());
// console.log(David.getAge());

// ? INTERFACE

interface Bible {
  name: string;
  scripture: string;
  read(action: string): string;
}

class Person implements Bible {
  name: string;
  scripture: string;

  constructor(name: string, scripture: string) {
    this.name = name;
    this.scripture = scripture;
  }

  read(action: string) {
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
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (
      Array.isArray(value) &&
      value.every((element) => typeof element === "string")
    ) {
      this.dataState = value;
      return;
    } else throw new Error(`Param is not an array of strings`);
  }
}

const People = new Disciples();
People.data = ["Peter", "Andrew", "James"];
console.log(People.data);
People.data = [...People.data, "John"];
console.log(People.data);
