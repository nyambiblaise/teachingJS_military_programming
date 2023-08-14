//recall that a constructor is a special method that is called automatically when a class is instantiated.
//When you create a new instance of a class, the constructor() function will be automatically called.
class User{
    constructor(){
        console.log("this is a constructor");
    };
}
let user = new User();