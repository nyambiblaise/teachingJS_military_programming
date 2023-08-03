//Complete the getTemperatures function such that it returns an array of the temperatures recorded in the recordings parameter it receives.
const recordings = [{
    date: "2020-01-03",
    temperature: 3
}, {
    date: "2020-01-04",
    temperature: -4
}];
const getTemperatures = temp=>{
    return temp.map(t=>t.temperature);
}
console.log(getTemperatures(recordings))