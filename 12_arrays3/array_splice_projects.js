//Complete the function removeFirstApp such that it removes the first element of the apps array it receives and returns the new array (which should not contain the item that was removed)

const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"];

const removeFirstApp = apps=>{
    apps.splice(0,1);
    return apps;
}
console.log(removeFirstApp(apps));

//Complete the function removeSecondApp such that it removes the second element from the apps array it receives and returns the new array (which should not contain the item that was removed).

const removeSecondApp = listOfApps => {
    listOfApps.splice(1,1);
    return listOfApps;
}
console.log(removeSecondApp(apps));