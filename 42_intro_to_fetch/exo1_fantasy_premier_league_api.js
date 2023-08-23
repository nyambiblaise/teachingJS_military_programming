const url = "https://fantasy.premierleague.com/api/entry";
const getManager = (managerID)=>{
    return fetch(`${url}/${managerID}`).then(response=>response.json()).then(data=>{
        console.log(data);
    })
}
getManager(2352989);