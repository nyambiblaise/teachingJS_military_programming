//Implement a function wait(milliseconds) that returns a promise and fulfills after milliseconds have elapsed.

const wait = (milliseconds)=>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve();
        },milliseconds);
    })
}
wait(1000).then(()=>{
    console.log(`Waited for 1 second`);
})