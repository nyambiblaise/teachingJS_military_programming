/*
endpoint:
array of objects: https://jsonplaceholder.typicode.com/users
array: https://jsonplaceholder.typicode.com/todos/1
-  every endpoint can return different data types.
 */
const usersURL = "https://jsonplaceholder.typicode.com/users";
const todoListURL = "https://jsonplaceholder.typicode.com/todos/1";

//getting data from a simple array
const getToDoListData = ()=>{
    return fetch(todoListURL).then(response=>response.json()).then(data=>{
        console.log(data);
        return data;
    })
}
getToDoListData().then(value => {
    console.log(value)
});

//getting data from an array of objects
const getAllUsersWithInfo = ()=>{
    return fetch(usersURL).then(res=>res.json()).then(data=>{
        data.forEach(somedata=>{
            console.log(somedata);
        })
    })
}
getAllUsersWithInfo();