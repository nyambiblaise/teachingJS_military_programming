/*
Complete the function getCourseDetail such that it returns the following string:
The course X is Y
Where X is replaced with the detail parameter and Y replaced with the value from the course parameter where the property is detail. So, for example, for getCourseDetail(course, "name") the value of Y should be course.name.

console.log(getCourseDetail({id: 1, name: "Learn JavaScript", year: 2023}, "name")); // "The course name is Learn
 JavaScript"
 */
let courses = {
        id:1,
        name:"Learn JavaScript",
        year:2023
    };
let getCourseDetail = (course,detail)=>{
    return `Course ${detail} is ${course[detail]}`;
}
console.log(getCourseDetail(courses,"name"))
console.log(getCourseDetail(courses,"id"))
console.log(getCourseDetail(courses,"year"))