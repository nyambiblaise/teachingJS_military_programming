/*
Promise life cycle
A promise starts in the pending state and then will either resolve successfully (fulfilled) or reject with an error (rejected).

It is also possible for a promise to never resolve. This can be caused by one of 2 reasons:

wrong implementation of the promise (that should be fixed)
the condition that resolves the promise is never achieved (this is okay)
An example of the latter, let's say we've got a promise that resolves when the user clicks on a button. If the user never clicks on the button, then the promise will never resolve (or reject). It will always stay in the pending state.

- The rejected state of a promise is meant for when things break. For example, a network connection issue.
- The callback provided to .catch(callback) will run if the promise ends up in the rejected state.
- A promise starts in the pending state and then will either resolve successfully (fulfilled) or reject with an error
 (rejected).
- It is also possible for a promise to never resolve (could be an implementation bug or could be because the
 condition to resolve is never met).
- try...catch does not work with promises because the promises are asynchronous.
- Use .catch() to handle errors with promises.
- The .finally(callback) runs after the .then() when the promise resolves successfully and after the .catch() when
 the promise rejects.
- .finally(callback) can be used to stop a loader in both cases (success and error).
- Promise.all returns a Promise that fulfills when all the promises it receives have been fulfilled. It rejects when
 one of these promises fails.
- If you want to execute more than one promise at a time and only care about the first one that successfully
 resolves, you can use the Promise.any method.
 */