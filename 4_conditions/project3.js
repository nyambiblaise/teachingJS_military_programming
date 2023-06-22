//Complete the function evenOrOdd such that it returns the string "even" when the number parameter it receives is even and "odd" otherwise.
function evenOrOdd(n) {
    if(n%2===0)
        return "even";
    return "odd";
}
console.log(evenOrOdd(6));
//using switch case to determine gender and return true if the gender is male or false otherwise. use the first
// initials of the gender
function findGender(gender) {
    let initials = gender.charAt(0).toLowerCase();
    switch (initials) {
        case "m":
            return true;
            break;
        case "f":
            return false;;
            break;
        default:
            return "Unknown Gender";
            break;
    }
}
console.log(findGender("fog"))