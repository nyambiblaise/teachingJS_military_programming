/*
endpoint:
array of objects: https://jsonplaceholder.typicode.com/users
array: https://jsonplaceholder.typicode.com/todos/1
-  every endpoint can return different data types.
 */
const usersURL = "https://jsonplaceholder.typicode.com/users";
const todoListURL = "https://jsonplaceholder.typicode.com/todos/1";

const getToDoListData = ()=>{
    return fetch(todoListURL).then(response=>response.json()).then(data=>{
        console.log(data);
        return data;
    })
}
console.log(getToDoListData());