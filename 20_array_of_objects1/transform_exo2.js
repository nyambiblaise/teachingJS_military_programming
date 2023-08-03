//Complete the getFullNames function such that it returns an array containing the first name and last name of every user, separated by a space character. Those full names should be in upper case.

const users = [
    {
        id:1,
        firstName:"Jean",
        lastName:"Paul"
    },
    {
        id:2,
        firstName: "Kamto",
        lastName: "Demo"
    }
];
const getFullNames = someUser=>{
    let name = someUser.map((t)=> {
        return `${t.firstName} ${t.lastName}`.toUpperCase();
    });
    return name;
}
console.log(getFullNames(users));