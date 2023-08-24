/*
Base URL: https://api.learnjavascript.online/demo/
Endpoint: user.json
Method: PUT
Body: {firstName: "Sam", lastName: "Green"} (replace with values from the form)
 */
const apiURL = "https://api.learnjavascript.online/demo/user.json";
const getAllUsers = ()=>{
    return fetch(apiURL,{
        method:"GET"
    }).then(response=>{
        if(!response.ok){
            throw new Error(response.statusText);
        }
        return response.json();
    }).then(data=>{
        console.log(data);
    }).catch(error=>{
        console.error(error);
    })
}
getAllUsers()