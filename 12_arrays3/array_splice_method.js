//You can also delete specific items from an array using the splice(start[, deleteCount]) method.
const names =["john","mary","judas","peter","silas"];

console.log("BeFore Deleting");
console.log(names);

names.splice(1,2);

console.log("After Deleting");
console.log(names);