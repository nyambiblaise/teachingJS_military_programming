/*
Complete the checkForNewNotifications function such that it makes a fetch request to https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json, converts the response to JSON format, and logs the data received to the console.
 */
const url = "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/ndew.json";
const checkForNewNotifications = ()=>{
    return fetch(url).then(response=>response.json()).then(data=>{
        console.log(data);
    })
}
checkForNewNotifications();