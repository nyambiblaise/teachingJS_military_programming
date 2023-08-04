//Complete the allGroupsPublic function such that it returns true if all the groups are public (based on isPublic), and false otherwise.
const sampleGroups = [{
    id: 1,
    title: "Football",
    details: {
        messageCount: 30,
        public: true
    }
}, {
    id: 2,
    title: "Family",
    details: {
        messageCount: 1014,
        public: false
    }
}];
const allGroupsPublic = ()=>{
    return sampleGroups.every(t=>t.details.public);
}
console.log(allGroupsPublic());