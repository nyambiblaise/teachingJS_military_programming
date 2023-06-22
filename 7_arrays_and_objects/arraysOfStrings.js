//recall array index starts at 0 and ends at n-1 where n=size
let names = ["jude","paul","arrey","bissong"]
function getFirstElement(allNames){
    return allNames[0];
}
function getLastElement(allNames) {
    return allNames[allNames.length - 1]
}
console.log(getLastElement(names))
//convert the names array into an array made up of the first character of every name:
function getFirstCharacter(allNames) {
    return allNames.map(function (x) {
        return x[0];
    })
}
function getLastCharacter(allNames) {
    return allNames.map(function (n){
        return n[n.length - 1]
    })
}
console.log(getLastCharacter(names))