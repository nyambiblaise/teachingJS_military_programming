/*
Get full name
Complete the function getFullName such that it returns the name from the user object when it exists. Otherwise, it should return "N/A".
Take a look at the sample usage to understand the structure of the object that this function expects.
 */
const user = {
    info:{
        name:"john",
        age:19
    }
};
let getFullName = (someUser)=>{
    return `${someUser.info.name??"N/A"}`;
}