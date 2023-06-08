//Complete the class Passport such that it includes the following instance methods:
// getFirstName which returns the first name in lower case.
// getLastName which returns the last name in upper case.
// getFullName which returns the first name and last name separated by a space character.
// getInitials which returns the first character of the first name followed by a dot character (.), followed by the first character of the last name and followed by a dot character (.).
// getIsValidName which returns "Yes" (string) when the first name is at least 1 character long and the last name is at least 1 character long and the last name does NOT end with a dot character (.). In all other cases, it should return "No".
// Note: the class is initialized with 2 arguments: the first name and the last name.
class Passport{
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFirstName(){
        return this.firstName.toLowerCase();
    }
    getLastName(){
        return this.lastName.toUpperCase();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    getInitials(){
        return `${this.firstName[0]}.${this.lastName[0]}.`;
    }
    getIsValidName(){
        if(this.firstName.length>0 && this.lastName.length>0 && !this.lastName.endsWith("."))
            return "Yes";
        else
            return "No";
    }
}
let pass =  new Passport("Jonas","Arrey");
console.log(pass.getIsValidName())