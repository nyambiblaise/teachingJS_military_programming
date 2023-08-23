/*
Whenever you're working with APIs, you will have to read the official documentation.
For example, if you're working with the Twitter API, you will have to read the Twitter documentation.

A common pattern you'll see in documentation is that they will not repeat the start of the URL for every single API URL. For example, let's say Twitter's API has the following API URLs:

https://twitter.com/api/v1/users.json
https://twitter.com/api/v1/notifications.json
https://twitter.com/api/v1/tweets.json
https://twitter.com/api/v1/account/password.json
Instead, they'll tell you that the Base URL is https://twitter.com/api/v1 and then they will list the API endpoints as follows:

/users.json
/notifications.json
/tweets.json
/account/password.json
This avoids repetition and makes the documentation easier to read.

We use the words endpoint and URL interchangeably. When working with APIs, you will often hear developers say the word endpoint more frequently than URL.
 */