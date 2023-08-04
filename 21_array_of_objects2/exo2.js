//Complete the getBigGroups function such that it returns the chats that have 100 messages or more.
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
const getBigGroups = () =>{
    return sampleGroups.filter(group=>group.details.messageCount>=100);
}
console.log(getBigGroups());