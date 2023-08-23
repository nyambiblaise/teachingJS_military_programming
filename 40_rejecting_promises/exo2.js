/*
Implement the function failAfter(milliseconds) that returns a promise and fails after milliseconds have elapsed.
It should fail with the following message: "You asked me to fail after Xms and I did!" where X is replaced by milliseconds.
 */
const failAfter = (milliseconds)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(`You asked me to fail after ${milliseconds}ms and I did!`);
        },milliseconds);
    })
}
failAfter(1000).then(()=>{

}).catch(error=>{
    console.error(error);
})