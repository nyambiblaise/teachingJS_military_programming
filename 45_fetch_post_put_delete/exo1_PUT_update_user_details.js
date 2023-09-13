/*
Base URL: https://api.learnjavascript.online/demo/
Endpoint: user.json
Method: PUT
Body: {firstName: "Sam", lastName: "Green"} (replace with values from the form)

 */
const apiURL = "https://api.learnjavascript.online/demo/user.json";

const userData = {firstName: "Jude", lastName: "Nyamb"};

const updateUserProfile = (firstName, lastName)=>{
    return fetch(apiURL,{
        method:"PUT",
        body:JSON.stringify(firstName,lastName)
    }).then(response=>{
        if(!response.ok){
            throw new Error(`Something went wrong ${response.statusText}`);
        }
        return response.json();
    }).then(data=>{
        console.log(data);
    }).catch(error=>{
        console.error(error);
    })
}

updateUserProfile(userData)