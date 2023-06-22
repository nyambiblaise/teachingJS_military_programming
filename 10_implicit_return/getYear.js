/*
Complete the function getYear such that it returns the searchYear (passed as 2nd parameter) when it's found in the array. Otherwise, it should return undefined.
Use an arrow function (implicit return is optional).
 */
const years = [2019, 2020, 2021];
const getYear = (years,search)=>{
    return years.find(year=>year==search);
}
console.log(getYear(years,2022));