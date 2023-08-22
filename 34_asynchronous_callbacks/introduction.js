/*
The function signature for setTimeout is setTimeout(callback, milliseconds).
the function stays in the queue and runs after x ms.

What do synchronous and asynchronous mean?
To explain the difference between synchronous and asynchronous code, think about the difference between a face-to-face conversation and a conversation over text message.

A face-to-face conversation is synchronous because people are talking and replying immediately one after the other.
However, a conversation over text message is asynchronous because the recipients can reply at a later time in the future.
 */
setTimeout(()=>{
    console.log("Welcome...");
},5000);