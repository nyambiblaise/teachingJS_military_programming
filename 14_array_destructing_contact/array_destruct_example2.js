//Complete the function getFullName such that it returns the full name of the user (the first name and the last name separated by a space character).
// You have to use array destructuring and call the variables firstName and lastName.

const fullName = ["John","Paul"];

let getFullName = someUser=>{
    const [firstName,lastName] = someUser;
    return `${firstName} ${lastName}`;
};
console.log(getFullName(fullName))