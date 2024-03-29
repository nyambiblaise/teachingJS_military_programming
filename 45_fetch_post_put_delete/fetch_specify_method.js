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
/* GET STARTS HERE ============================================
//POST: you MUST specify the method if you want to fetch data using the POST method
- method of the request (GET/POST/PUT/DELETE)
- headers you'd like to send
- body you'd like to send
 */
/* POST STARTS HERE ============================================ */
fetch(URL,{
    method:"POST"
}).then(response=>response.json())
    .then(data=>{
    console.log(data);
})
//Note that with the POST, PUT, DELETE methods, you MUST pass some data to the body via the api url.
fetch(URL,{
    method:"POST",
    body:JSON.stringify({
        var1:"value1",
        var2:"value2",
        courses:{
            maths:17,
            chemistry:10
        }
    })
})

/*
We wrapped the body with JSON.stringify().
What you will end up needing frequently is converting from a JSON string into a JSON object.

The reason why this is the most frequent use case is that when you communicate with an API, you cannot send an object. You will have to convert it to a string. Similarly, the API cannot send you an object, it will send you a string. But, that string is not any string. It's a JSON string. That means that it can be converted back into a JSON object.

So, we cannot send objects directly to the API, thus we have to convert them to a string with JSON.stringify.

When the fetch request completes, we convert the server response to json.
We log the data received from the server (this often contains the confirmation that the tweet was created).
POST ENDS HERE ============================================ */