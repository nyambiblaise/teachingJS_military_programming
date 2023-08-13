const currentDate = new Date();
const getCurrentDate = someDate=>{
    try{
        return currentDate.getDate();
    }catch (error){
        return `Error getting current date from the internet because ${error}`;
    }
}
console.log(getCurrentDate(currentDate))