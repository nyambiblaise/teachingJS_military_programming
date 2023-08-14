//You can also immutably update an array and immutably remove an item using the .map() and .filter() methods. Even though this is not the focus of this course, here's an example:

const grades = [10, 20];
const filterGrades = someGrades=>{
    return someGrades.filter( (x) => x !== 20);
}
const deleteGrade = someGrades=>{
    return someGrades.map((t)=>{
        t.pop();
        //return t;
    });
}
console.log(filterGrades(grades));
console.log(deleteGrade(grades));