/*The concept of reduce is also not altered for arrays of objects, however, it tends to get more complicated to
 grasp because you have to keep track of several variables in your head and these variables now have different data types (the current will now be an object).

 Reduce refresher
The reduce() method is used to calculate a single value from an array. In other terms, the reduce() method reduces
 an array into a single value.
The most common use cases of reduce are sum & multiplication .

 */
let numbers = [10,20,30];
const findSum = numbers.reduce((total,current)=>{
    return total + current;
})
console.log(findSum);
//the above method is for an array, let's look at an array of objects
const grades = [
    {
        grade:10
    },
    {
        grade:30
    },{
    grade: 30
    }
];
const calcSum = (x)=>x.reduce((total,current)=>{
    return total + current.grade;
},0);
console.log(calcSum(grades))
//This means that the current variable will be an object instead of a number. Thus, we'll have to extract the grade out of it by writing current.grade. This can be visualized by adding a console.log(current) inside the .reduce() callback.