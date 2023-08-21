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
        return `Completed`;
    }
    set setGrade(g){
        this.g = g;
    }

}