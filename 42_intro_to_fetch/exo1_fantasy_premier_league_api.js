const url = "https://fantasy.premierleague.com/api/entry";
const getManagerByID = (managerID)=>{
    return fetch(`${url}/${managerID}`).then(response=>response.json()).then(data=>{
        console.log(data);
    })
}
getManagerByID(2352989);
//https://www.game-change.co.uk/2023/02/10/a-complete-guide-to-the-fantasy-premier-league-fpl-api/