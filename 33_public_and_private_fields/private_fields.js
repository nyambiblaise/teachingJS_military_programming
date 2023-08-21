//private class members cannot be accessed out of the class in which they were created
//To mark an instance variable or method as private, you have to prefix it with the # (hash sign).
class User{
    age = 16;
}
const user = new User();
console.log(user.age);