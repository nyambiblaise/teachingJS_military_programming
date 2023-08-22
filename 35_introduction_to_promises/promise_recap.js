///structure
const someFunction = (a,b)=>{
    return new Promise(successCallback=>{
        setTimeout(()=>{
            return a/b;
        },1000);
    });
}
//calling it
someFunction(5,3).then(successCallback=>{
    console.log(`sum is ${successCallback}`);
}).catch(errorCallback=>{
    console.error(`sum is ${errorCallback}`);
});