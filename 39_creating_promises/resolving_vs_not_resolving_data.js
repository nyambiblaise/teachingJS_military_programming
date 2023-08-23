//NOT RESOLVING DATA
const time = 1000;
let uname="john";
let upass = "mary";
const loginUser = (username,password)=>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve();
        },time);
    })
}
loginUser(uname,upass).then(()=>{
    console.log(`User logged in with username ${uname} and password ${upass}`);
})
//RESOLVING THE DATA
const signInUser = (uname,upass)=>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(uname,upass);
        },time);
    })
}
signInUser(uname,upass).then((x,y)=>{
    console.log(`Username: ${x}, Upass: ${y}`);
})