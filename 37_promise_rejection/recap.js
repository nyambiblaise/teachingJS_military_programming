/*
Promise life cycle
A promise starts in the pending state and then will either resolve successfully (fulfilled) or reject with an error (rejected).

It is also possible for a promise to never resolve. This can be caused by one of 2 reasons:

wrong implementation of the promise (that should be fixed)
the condition that resolves the promise is never achieved (this is okay)
An example of the latter, let's say we've got a promise that resolves when the user clicks on a button. If the user never clicks on the button, then the promise will never resolve (or reject). It will always stay in the pending state.
 */