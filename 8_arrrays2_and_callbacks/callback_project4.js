/*
Implement the getVotersCount function such that it returns the number of citizens that are allowed to vote (must be 18 years or older).
 */
const ages = [18,15,29,54,12,10,5];
function getVotersCount(listOfVoters) {
    let count = 0;
    listOfVoters.filter((voters)=>{
        if(voters>=18)
            count++;
    });
    return count;
}
console.log(`Only ${getVotersCount(ages)} people can vote`);