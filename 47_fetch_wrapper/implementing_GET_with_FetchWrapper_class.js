class FetchWrapper{
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        fetch(url).then(response=>{
            if(!response.ok){
                throw new Error(`Something went wrong with API`);
            }
            return response=>response.json();
        })
    }
    get(endPoint){

    }
}
const getData = new FetchWrapper("");
getData.get("").then(data=>{
    console.log(data);
})

fetch(url).then(response=>{
    if(!response.ok){
        throw new Error(`Something went wrong with API`);
        return response=>response.json();
    }
}).then(data=>{
    return data;
}).catch(error=>{
    return error;
})