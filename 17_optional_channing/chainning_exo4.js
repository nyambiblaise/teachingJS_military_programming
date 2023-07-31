//Complete the function getFullName such that it returns the full name in lower case from the user object when it exists. Otherwise, it should return undefined.
const user = {
    fullName:"john paul"
}
const getFullName = someUser=>{
    return someUser?.fullName?.toLowerCase();
}
console.log(getFullName(user));