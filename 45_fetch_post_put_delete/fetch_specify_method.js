/*
We talked about the fetch() method accepting the URL as a first argument. However, the fetch() method also accepts a 2nd argument that is optional.

In this second option, you can specify:

the method of the request (GET/POST/PUT/DELETE)
the headers you'd like to send
the body you'd like to send
Let's start with the method.

The method defaults to GET. If default method is GET, you are not obliged to put GET. both codes below are correct
 */
/* GET STARTS HERE ============================================ */
fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

//passing the method gives...
fetch(URL,{
    method:"GET"
})
    .then(r=>r.json())
    .then(data=>{
        console.log(data);
})
/* GET STARTS HERE ============================================ */
//POST: you MUST specify the method if you want to fetch data using the POST method
/* POST STARTS HERE ============================================ */
fetch(URL,{
    method:"POST"
}).then(response=>response.json())
    .then(data=>{
    console.log(data);
})
//Note that with the POST, PUT, DELETE methods, you MUST pass some data to the body via the api url.

/* POST ENDS HERE ============================================ */