"use strict";
function getFirstELement(array) {
    return array[0];
}
const numbers = [1, 2, 3];
const firstNum = getFirstELement(numbers);
const strings = ["232", "1212"];
const firstString = getFirstELement(strings);
const map = new Map();
map.set("sss", 4);
const map2 = new Map([["sss", 34]]);
map2.set("sss", 4);
const map3 = new Map();
const response = {
    data: {
        name: "Kyle",
        age: 23,
    },
    isError: false,
};
const responseBlog = {
    data: {
        title: "Hello",
    },
    isError: false,
};
const science = {
    id: "1",
    title: 1,
};
