//Utility types

//1.) Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci213",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 99 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 99 });

interface Work {
  date: string;
  days: number;
  hours?: number;
}

const person1: Work = {
  date: "July 2024",
  days: 3,
};

const updatePerson = (assign: Work, assignToUpdate: Partial<Work>): Work => {
  return { ...assign, ...assignToUpdate };
};

console.log(updatePerson(person1, { days: 1 }));

// ? Required and readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  //send to database etc.
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

recordAssignment({ ...assignGraded, verified: true });

// ? Record Utility tool the most popular

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 },
};

//? Pick and omit

type AssignResult = Pick<Assignment, "studentId" | "grade">;
const score: AssignResult = {
  studentId: "123",
  grade: 85,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "1234",
  title: "Final Project",
};

//?Exclude and extract

type adjustedGrade = Exclude<LetterGrades, "U">; // exlcude U

type highGrades = Extract<LetterGrades, "A" | "B">;

//? Nonnullable

type allPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<allPossibleGrades>;

//? ReturnType

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type newAssign = ReturnType<typeof createNewAssign>;

const tsAssign: newAssign = createNewAssign("Utility Types", 100);

//? Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: newAssign = createNewAssign(...assignArgs);

console.log(tsAssign2);

//? Awaited

// Awaited - helps us with the ReturnType of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users[0].id));
