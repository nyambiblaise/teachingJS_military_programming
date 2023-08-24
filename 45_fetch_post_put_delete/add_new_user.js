const userURL = "https://jsonplaceholder.typicode.com/users";
const user = {
    id:11,
    name:"Nyambi",
    username:"nyambiblaise"
}
const addUser = (userData)=>{
    return fetch(userURL,{
        method:"PUT",
        body:JSON.stringify(userData)
    }).then(response=>{
        if(!response.ok){
            throw new Error(`Couldnt get user because ${response.statusText}`)
        }
        return response.json();
    }).then(data=>{
        console.log(data);
    }).catch(error=>{
        console.error(error);
    })
}