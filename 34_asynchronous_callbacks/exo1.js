//create a function called  delayedWelcome function such that it delays the console.log call 1 second into the
// future.

const delayedWelcome = name=>{
    console.log(`Welcome ${name}`);
};
setTimeout(delayedWelcome,1000);

//or...
let delayMessage = someUser=>{
    setTimeout(()=>{
        console.log(`Welcome ${someUser}`);
    })
}
delayMessage('Jonas')