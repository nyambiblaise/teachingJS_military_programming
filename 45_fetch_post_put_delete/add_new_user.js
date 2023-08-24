const userURL = "https://jsonplaceholder.typicode.com/posts";
const user = {
    userId:21,
    id:200,
    title:"Nyambi",
    body:"i am posting about CANADA"
}
const addUser = (userData)=>{
    return fetch(userURL,{
        method:"POST",
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify(userData)
    }).then(response=>{
        if(!response.ok){
            throw new Error(`Couldnt add post because ${response.statusText}`)
        }
        return response.json();
    }).then(data=>{
        console.log("Post added")
        console.log(data);
    }).catch(error=>{
        console.error(error);
    })
}
addUser(user);