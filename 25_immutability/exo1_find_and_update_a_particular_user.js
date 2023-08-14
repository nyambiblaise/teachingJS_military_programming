//A user is verifying their email on your website. We've got an array of users, and the id of the user that's
// verifying their email. Set the isVerified field to true for that user.
const users = [{
    id: 1,
    name: "Sam",
    isVerified: false
}, {
    id: 2,
    name: "Alex",
    isVerified: false
}, {
    id: 3,
    name: "Charlie",
    isVerified: false
}];
const verifyUser = (users, userId) => {
    const user = users.find((users)=> users.id === userId);
    if(user){
        user.isVerified=true;
    }
    return users;
}
console.log(verifyUser(users, 1));