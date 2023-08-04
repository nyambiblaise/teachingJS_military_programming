//Complete the exportVerifiedUsers function such that it returns a CSV string of the names of the users that are verified.
const sampleUsers = [{
    name: "Sam",
    isVerified: true
}, {
    name: "Alex",
    isVerified: false
}, {
    name: "Charlie",
    isVerified: true
}];
const exportVerifiedUsers = ()=>{
    return sampleUsers.filter(users=> users.isVerified).map(users=>users.name).join(",");
}
console.log(exportVerifiedUsers(sampleUsers))