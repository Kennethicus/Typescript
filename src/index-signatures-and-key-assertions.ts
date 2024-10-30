//Index Signatures

// interface TransactionObj {
//   Pizza: number;
//   Book: number;
//   Job: number;
// }

// interface TransactionObj {
//   readonly [index: string]: number | string | any[];
//   Pizza: number;
//   Book: number;
//   Job: number;
// }

// const todaysTransaction: TransactionObj = {
//   Pizza: -10,
//   Book: -5,
//   Job: 50,
//   shift: ["10AM", "2PM"],
// };

interface Student {
  //  [key: string]: number | string | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "TK",
  GPA: 1,
};

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "name");

// ?

// interface Incomes {
//   [key: string]: number;
// }

type Stream = "salary" | "bonus" | "sideHustle";
type Incomes = Record<Stream, number>;

const monthlyIncomes: Incomes = {
  salary: 1000,
  bonus: 500,
  sideHustle: 700,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
