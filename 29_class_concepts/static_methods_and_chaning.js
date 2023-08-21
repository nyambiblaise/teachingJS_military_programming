//static methods are methods that are called direcly without instantiating the class.
//in a static method, we cannot use the "this" keyword.
class Student{
    static showInfo(){
        console.log("Welcome Student");
    }
}
Student.showInfo();