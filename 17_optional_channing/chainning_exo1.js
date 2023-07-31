//Complete the function getFullName such that it returns the name from the user object when it exists. Otherwise, it should return undefined.
const user = {
    firstName:"john",
    lastName:"pope"
};
let getFullName = someUser=>{
    return someUser?.name;
}
console.log(getFullName(user))
