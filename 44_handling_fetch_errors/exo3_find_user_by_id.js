const apiURL = "https://jsonplaceholder.typicode.com/users?id=";
const uID = 10;
const findUserByID = (userID)=>{
    return fetch(`${apiURL}${userID}`).then(response=>{
        if(!response.ok){
            throw new Error(`Error getting user because ${response.statusText}`)
        }
        return response.json();
    }).then(userData=>{
        console.log(userData);
    }).catch(error=>{
        console.error(error);
    })
}
findUserByID(uID);