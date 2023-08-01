/*
Complete the getTotalSales function such that it returns the total value of sales for the users parameter it receives.
When a user is subscribed, you will get a subscription object which contains the value. Otherwise, the subscription object will not be present.
 */
const users = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Sam", subscription: {info: {value: 59}}},
    {id: 3, name: "Charlie", subscription: {info: {value: 31}}}
];
const getTotalSales = someUser=>{

};
console.log(getTotalSales(users))