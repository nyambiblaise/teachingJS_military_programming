/*
When you send a network request with the fetch method, you are performing a fetch with a method GET by default. There are 4 common methods that you should know about:

GET
POST
PUT
DELETE
Every one of these methods corresponds to an action:

GET: read data
POST: create data
PUT: update data
DELETE: delete data
Note: the word method here refers to one of the types above. It is different to the word method that we learned before which is a function on an instance of a class.

You, as the web developer (the end user of an API), will be told which method to use. Remember the base URL we talked about? Here's what the documentation looks like:

Base URL: https://example.com/api

list users GET /users
create a user POST /users
update a specific user PUT /users/{id}
delete a specific user DELETE /users/{id}
It's important to note that this is a convention and that APIs might differ a little bit. It ultimately depends on how they were implemented. Always read their documentation.

Fetch defaults to GET
By default, fetch defaults to the method GET. In the next lesson, we'll see how you can specify another method (such as PUT, POST, or DELETE).

Request 'body'
Requests made with method PUT, POST, or DELETE can have an extra field called body. The body can contain any information that you want to send with the request. However, requests made with GET are not allowed to have a body.

Here's why:
With GET, you are reading information. You're not sending information.
Whereas with the other methods, you are sending information. For example, to update a user, you have to provide the new details. Another example, to create a new user, you have to provide the details of that user.

These details go in the body of the fetch request. We'll see how in the next lesson.
 */