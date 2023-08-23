/*
The 2nd argument in the promise executor is a function that you can call to reject the promise. It will move it from pending to rejected.

Even though you're not required, aim to call this 2nd argument reject for clarity reasons.

In summary, the promise executor receives resolve and reject functions in this order.

Similarly to resolve(data), you can reject with data reject(data) and the data will be made available to the .catch() callback.
 */