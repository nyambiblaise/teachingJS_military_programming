//static methods are methods that are called direcly without instantiating the class.
//in a static method, we cannot use the "this" keyword.
class Student{
    static showInfo(){
        console.log("Welcome Student");
    }
}
Student.showInfo();

//Method chaining
// You may sometimes encounter method chaining, which is a method called on the result of another method. For example, assuming a class Course:
class Course{
    markAsComplicated(){
        console.log(`Completed`);
    }
    setGrade(g){
        console.log(`Grade is ${g}`);
    }
    requestCertificate(){
        console.log(`Certificate is Requested`);
    }
}
//with chaining, it is possible to do....
const course = new Course();
course.markAsComplicated();
course.setGrade(40);
course.requestCertificate();

//with method chaining, it becomes this...
console.log("\n METHOD CHAINING");
course.markAsComplicated().setGrade(10).requestCertificate();