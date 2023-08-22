/*
A Promise is a JavaScript feature that allows us to schedule work in the future and then runs callbacks based on the outcome of the promise (whether it was successful or not).
 */
const wait = milliseconds=>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve();
        },milliseconds);
    });
}
wait(1000).then(()=>{
    console.log(`Waited for x seconds`);
})