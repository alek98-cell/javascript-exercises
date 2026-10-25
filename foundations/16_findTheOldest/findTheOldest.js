let currYear = 2026
const findTheOldest = function(people) {
    let ageArr = people.map((a) => ({name: a.name, yearOfBirth: a.yearOfBirth, yearOfDeath: a.yearOfDeath, age: (a.yearOfDeath != undefined ? a.yearOfDeath - a.yearOfBirth : currYear - a.yearOfBirth)}));
    let sortedArr = ageArr.sort((a, b) => a.age - b.age);
    let isolatedArr = sortedArr[sortedArr.length - 1]
    return(isolatedArr);
};


// Do not edit below this line
module.exports = findTheOldest;
