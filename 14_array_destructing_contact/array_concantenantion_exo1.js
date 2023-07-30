//Complete the function getApps such that it returns a new array containing the items from both parameters it receives.
const getApps = (app1,app2)=>{
    const third = [...app1,...app2];
    return third;
}
console.log(getApps(["Calculator", "Whatsapp"], ["Chrome", "Firefox"]))