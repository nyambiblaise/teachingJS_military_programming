//forEach function
let names = ["jude","joseph","peter","silas"];
names.forEach(function (user) {
    console.log(user);
})
//MAP function: we want to map all elements to a new array and set all items to uppercase
let newNames = names.map(function (n) {
    return n.toUpperCase();
})
console.log(newNames)
// returns an array of all the names where every name is in lower case.
function lowerCaseNames(allNames) {
    return allNames.map(function (n) {
        return n.toLowerCase();
    })
}
console.log(lowerCaseNames(names))
//INCLUDE function: the function below checks if a specific character exist in an array.
let characters = ["A","G","P","T"];
function hasCharacter(character,char) {
    if(character.includes(char))
        return true;
    else
        return false;
}
console.log(hasCharacter(characters,"A"))
//JOIN function: the function exportCSV returns a string containing the names separated by a comma.
function exportCSV(allNames){
    let aN = allNames.join(",");
    return aN;
}
console.log(exportCSV(names));

