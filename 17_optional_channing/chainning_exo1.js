//Complete the function getFullName such that it returns the name from the user object when it exists. Otherwise, it should return undefined.
const user = {
    info: {
        firstName:"john",
        lastName:"pope"
    }
};
let getFullName = someUser=>{
    return someUser.info?.name;
}
console.log(getFullName(user))
