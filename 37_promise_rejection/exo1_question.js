//create a promise that will display a loader while it is executing and show another loader when it finishes
export const getUserDetails = (someUser)=> {
    return new Promise((resolve,reject)=>{
        if(!someUser){
            reject("No user Passed");
        }
        setTimeout(()=>{
            resolve("User gotten successfully...");
        },1000);
    })
}