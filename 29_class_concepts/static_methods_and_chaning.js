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
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    markAsComplicated(){
        this.status = true;
        return this; // allows method chaining
    }
    setGrade(g){
        this.grade = g;
        return this; // allows method chaining
    }
    requestCertificate(){
        this.certificate = true;
        return this; // allows method chaining
    }
}
//with chaining, it is possible to do....
const course = new Course("Completed",90);
course.markAsComplicated();
course.setGrade(40);
course.requestCertificate();

//with method chaining, it becomes this...
/*
Notice how we call setGrade(40) on the result of .markAsCompleted(). Similarly, we call .requestCertificate() on the
 result of setGrade(40).
 For this to work, these instance methods should always return this. The reference to the current instance. By doing so, you are able to call other methods on the instance because they're returning the current instance.
 */
console.log("\n METHOD CHAINING");
console.log(course.markAsComplicated().setGrade(10).requestCertificate());

//NOTE: Method chaining is possible when the instance method returns this