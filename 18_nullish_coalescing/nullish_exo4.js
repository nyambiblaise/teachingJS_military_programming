/*
Complete the function getFullName such that it returns the full name in lower case from the user object when it exists. Otherwise, it should return "user".
 */
const user = {
    info:{
        name:"jOHn",
        age:19
    }
};
const getFullName = someUser=>{
    return `${someUser.info?.name.toLowerCase()??"user"}`;
}
console.log(getFullName(user))