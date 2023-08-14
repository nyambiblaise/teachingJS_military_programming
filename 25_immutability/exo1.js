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
    return users.find((users)=> users.id === userId)
}

//verifyUser(users, 2);
console.log(verifyUser(users, 3));