/*
When you perform a fetch request to an API, it will respond with a status code that could be in one of the following ranges:
100-199 (or 1xx)
200-299 (or 2xx)
300-399 (or 3xx)
400-499 (or 4xx)
500-599 (or 5xx)
You already know one of these codes which is 404. If you've ever seen a 404 page, it means that the document was not found.

You do not have to memorize all the codes. We're going to tell you the most common ones below and explain the ranges.

Range explanation
The 404 status code belongs to the 400-499 range (or 4xx). Every one of these ranges (or groups) fall under a certain category:

1xx is for informational responses.
As a web developer, you will rarely ever encounter this group.

2xx is for successful responses.
This is one of the most common range. The most common code here is 200 which has a response text of OK. This means that the request succeeded so the response is "OK" ☑️.

3xx is for redirects.
When you browse to http://xyz.com, you will automatically get transferred to the secure version (https) and land on
 https://xyz.com. This is what we call a redirect.

There are 2 common codes:

301 with a response text of Moved Permanently.
302 with a response text of Found.
The main difference between these two is that 301 is a permanent redirect whereas 302 is a temporary one.

4xx is for client errors.
The famous 404 Not Found is in this group.
Client errors means that the error is most likely due to the client (you, the developer).

For example, 404 means that you entered a URL that does not exist.
Another common code is 401 with a response text of Unauthorized which is used when a resource (or page) requires authentication (it requires you to be logged in).

5xx is for server errors.
500 is reserved for server errors. This means that the error is most likely from the server.
The most common error codes here are:

500 with status text Internal Server Error meaning there's a bug in the code (that's running on the server).
504 with status text Gateway Timeout. You often see this one when a website suddenly becomes popular and is unable to keep up with the incoming traffic.

 */