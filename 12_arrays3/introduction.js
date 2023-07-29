//Let's say you have an array of users, and you'd like to get the name of each user separated by a comma. Like a CSV (Comma Separated Values) export.
const users = [
    {
        id:1,
        name:"john"
    },{
    id:2,
    name: "mary"
    },{
    id:3,
    name:"judas"
    }
];
const newUser = users.map(user=>user.name);
const csvJoin = newUser.join(",");
console.log(csvJoin);

//this can also be chained into a single command
const finalCSV = users.map(user=>user.name).join(",");
console.log(finalCSV);

//applying this to an HTML list gives
const html = `<ul>
    ${users.map(user=>`<li>${user.name}</li>`).join("")}
    </ul>`;
console.log(html)