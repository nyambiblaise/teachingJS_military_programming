//Public class fields allows you to define instance variables on a class without having to override the constructor.
//public class members can be accessed by anyone
class User{
    constructor() {
        this.age = 10;
    }
}
//using public fields...
class User1{
    age = 19; //age will be automatically set to 19 withiut using the constructor
    amount = 1_000;
    currency = "usd";
    isStudent = false;
}