//Complete the getCompletedCourses function such that it returns the courses (could be 0 or more) that are completed. You can tell if a course is completed or not by checking the isCompleted property.

const courses = [
    {
        id: 1,
        name: "Learn Programming",
        isCompleted: true
    },
    {
        id: 2,
        name: "Learn JavaScript",
        isCompleted: false
    }
];
const getCompletedCourses = ()=>{
    //return courses.filter(course=>course.isCompleted===true); //the one below will still work
    return courses.filter(course=>course.isCompleted);
}
console.log(getCompletedCourses());