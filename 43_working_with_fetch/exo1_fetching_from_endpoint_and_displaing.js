/*
Complete the checkForNewNotifications function such that it fetches the following endpoint https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json and then calls the showNewNotifications function with the number of unread notifications.
 */
const url = "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json";

const checkForNewNotifications = ()=>{
    return fetch(url).then(response=>response.json()).then(data=>{
        console.log(data)
        //showNewNotifications(data);
    })
}
const showNewNotifications = (number)=>{
    console.log(`You have ${number} new notifications`);
}
checkForNewNotifications();