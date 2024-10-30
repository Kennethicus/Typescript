//provides a  placholder or type varible

const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

// console.log(isObj({ name: "Hello" }));
// console.log(isObj("Hello"));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue([1, 2, 3]));

//? Using interface with generic "T" type placeholder
interface Boolcheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): Boolcheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

//? new interface ? has ID

interface hasID {
  id: number;
}

const processUser = <T extends hasID>(user: T): T => {
  //process user with logic
  return user;
};

console.log(processUser({ id: 1, name: "Ken" }));
// console.log(processUser({ name: "Dave" }));

// ? more complex

const getUserProperty = <T extends hasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
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

class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject<string>("John");
console.log(store.state);
store.state = "John";
// store.state = 12;

const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = ["John", 25, true];
console.log(myState.state);
