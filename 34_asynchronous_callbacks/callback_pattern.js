/*
Why do callbacks exist?
Performance is why callbacks exist and why it's possible to schedule work for the future in JavaScript.

We cannot block the execution of JavaScript until a certain long task has finished. Imagine if, while the welcomeUser is executing, we had to wait 1 second. Meaning that the browser becomes completely unusable for a full second until it has finished.

This is the reason why we have callbacks (and later promises). It allows us to continue running the rest of the code while scheduling some functions in the future.
 */
const welcomeUser = (name,callback)=>{
    setTimeout(()=>{
        console.log(`Welcoming ${name}`);
        if(callback){
            callback();
        } //runs when code is successful
    },2000);
}
welcomeUser('pep');