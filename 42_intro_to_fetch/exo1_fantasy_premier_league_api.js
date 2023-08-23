const url = "https://fantasy.premierleague.com/api/entry";
const getManagerByID = (managerID)=>{
    return fetch(`${url}/${managerID}`).then(response=>response.json()).then(data=>{
        console.log(data);
    })
}
getManagerByID(2352989);