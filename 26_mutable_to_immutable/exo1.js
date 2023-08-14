//Complete the cloneApps function such that it returns a new copy of the apps parameter it receives.
const apps = ["Calculator","Notepad"];

const cloneApps = someApps=>{
    return [...someApps];
}
console.log(cloneApps(apps));