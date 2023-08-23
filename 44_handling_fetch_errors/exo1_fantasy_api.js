const fantasyServer = "https://fantasy.premierleague.com/api/entry";
const findManagerByID = (managerID) =>{
    return fetch(`${fantasyServer}/${managerID}`).then(response=>{
        if(!response.ok){
            throw new Error("API Not functioning...")
            //console.log(response.status)//404 if not found
        }
        return response.json()
    }).then(data=>{
        console.log(data)
        /*if(response){
           console.log("All Good")
        }*/
    }).catch(error=>{
        console.error(`Something went wrong because ${error}`);
    })
}
findManagerByID(235298132132)//2352989