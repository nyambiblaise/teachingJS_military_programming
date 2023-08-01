//Complete the logNames function such that it logs the first name and the last name of the user, separated by a space character.
const user = [
    {
        firstName:"John",
        lastName:"Doe"
    },
    {
        firstName: "Mary",
        lastName: "Ashu"
    },
    {
        firstName: "Timmo",
        lastName: "Werner"
    }
];
const logNames = someUser=>{
    someUser.forEach(singleUser=>{
        console.log(`${singleUser.firstName} ${singleUser.lastName}`);
    })
}
logNames(user);