"use strict";
//Index Signatures
const student = {
    name: "TK",
    GPA: 1,
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "name");
const monthlyIncomes = {
    salary: 1000,
    bonus: 500,
    sideHustle: 700,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
