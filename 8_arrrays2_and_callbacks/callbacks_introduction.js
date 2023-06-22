/*
A callback is a function which is to be executed after another function has finished execution.
A formal definition would be - Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.
Review array_filter blocks in the folder "5_arrays1".

Complete the function getYear such that it returns the searchYear (passed as 2nd parameter) when it's found in the array. Otherwise, it should return undefined.
 */
const listOfYears = [2023,2022,2021,2020,2019,2018];
function getYear(years,searchYear,) {
    return years.find(function (s) {
        return s===searchYear;
    });
}
console.log(getYear(listOfYears,2022));
//Complete the function getOddYears such that it returns all the years that are odd from the years parameter it receives.
function getOddYears(years) {
    return years.filter((year)=>{
        return year%2!==0;
    });
}
console.log(getOddYears(listOfYears));