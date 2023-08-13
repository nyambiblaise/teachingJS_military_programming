//Complete the sumMessageCount function such that it returns the sum of the messageCount in every group.

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
const sumMsg = (x) => x.reduce((total,current)=>{
   return total + current.details.messageCount;
},0);
console.log(sumMsg(sampleGroups))