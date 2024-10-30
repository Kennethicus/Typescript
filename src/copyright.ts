// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute.("datetime", thisYear)
// year.textContent = thisYear

// 1st variation
// let year : HTMLElement | null
// year = document.getElementById("year")
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if (year){
// year.setAttribute.("datetime", thisYear)
// year.textContent = thisYear
// }

// 2nd variation
const year = document.getElementById("year") as HTMLSpanElement; // hey we span document is in our document, we know there's id year and thats exactly what we selecting

const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
