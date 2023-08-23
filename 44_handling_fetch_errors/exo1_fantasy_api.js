const fantasyServer = "https://fantasy.premierleague.com/api/entry";
const findManagerByID = (managerID) =>{
    return fetch(`${fantasyServer}/${managerID}`).then(response=>response.json()).then(data=>{
        if(response.status==="ok"){
           console.log("All Good")
        }
    }).catch(error=>{
        console.log(`Something went wrong because ${error}`);
    })
}
findManagerByID()