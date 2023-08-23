/*
Create fakeFetch function such that it returns a promise that resolves successfully after 1 second with the following
 object:
{
    departed: false,
    delayed: true
}
 */
const info = {
    departed:false,
    delayed:true
}
const fakeFetch = (info) => {
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(info);
        },1000);
    })
}

fakeFetch().then((data) => {
    console.log(data);
});
