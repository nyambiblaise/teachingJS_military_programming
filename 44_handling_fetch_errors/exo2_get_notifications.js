/*
Complete the function checkForNewNotifications such that it fetches the following endpoint https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json and then calls the imported showNewNotifications function with the number of unread notifications.
Then, handle network errors by logging it to the console with console.error().
 */
const url = "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json";
const checkForNewNotifications = ()=>{
    return fetch(url).then(response=>{
        if(!response.ok){
            throw new Error("API Error...");
        }
        return response.json();
    }).then(data=>{
        //console.log(data);
        showNewNotifications(data.count);
    }).catch(error=>{
        console.log(`Something went wrong - ${error}`);
    })
}
const showNewNotifications = (number)=>{
    console.log(`You have ${number} messages`);
}
checkForNewNotifications();