/*You can also delete specific items from an array using the splice(start[, deleteCount]) method.
To delete the 1st element of an array, you call .splice(0, 1).
    To delete 3 elements starting from the 2nd position, you call .splice(1, 3).
    If you call .splice(1), then it will remove all the items starting from the 2nd position (index 1).

*/
const names =["john","mary","judas","peter","silas"];

console.log("BeFore Deleting");
console.log(names);

names.splice(2);

console.log("After Deleting");
console.log(names);

//Complete the function resetApps such that it empties the apps array it receives as a parameter.
function resetApps(appList){
    return appList.splice(0,appList.length);
}
const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"];
console.log(resetApps(apps))

const resetAllApps = apps=>{
    return apps.splice(0,apps.length);
}
//console.log(resetAllApps(apps));