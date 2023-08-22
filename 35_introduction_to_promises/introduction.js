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
const time = 1000;
wait(time).then(()=>{
    console.log(`Waited for ${time/1000} seconds`);
})