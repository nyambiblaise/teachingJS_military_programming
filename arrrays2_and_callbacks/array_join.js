/*
the join() method is used to take an array and concatenate with a string, then creates a new array from that
 */
const fruits = ["Apple", "Peach", "Tomato"];
//we know that a CSV is a Comma Delimited File (;)
function exportFruitsToCSV(list) {
    return list.join(";");
}
console.log(exportFruitsToCSV(fruits)); //Apple;Peach;Tomato