/*
Complete the getFamilyGroup function such that it returns the first and only group that has the title "Family".

For the purpose of the challenge, you can assume that the groups array of object will always contain one (and only one) group with the title "Family"
 */
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
const getFamilyGroup = ()=>{
    return sampleGroups.find(t=>t.title==="Family");
}
console.log(getFamilyGroup());