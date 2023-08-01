/*
The host is welcoming the user into their apartment. Refactor the getStatus function and avoid using if conditions.
 */

const getStatus1 = (host, user, booking) => {
    if (booking.status === "pending") {
        return `Hey ${user}, we're awaiting confirmation from ${host}.`;
    } else if (booking.status === "confirmed") {
        return `Hey ${user}, ${host} is excited to be hosting you.`;
    } else if (booking.status === "canceled") {
        return `Unfortunately ${user}, ${host} has canceled your booking request.`;
    } else if (booking.status === "done") {
        return `${host} hopes you had a great stay.`;
    } else {
        return "Unknown booking status."
    }
}
const booking1 = {
    status: "pending"
};
const booking2 = {
    status: "confirmed"
}
//solution
const getStatus = (host, user, booking) =>{
    const someBooking = {
        pending:`Hey ${user}, we're awaiting confirmation from ${host}.`,
        confirmed:`Hey ${user}, ${host} is excited to be hosting you.`,
        canceled:`Unfortunately ${user}, ${host} has canceled your booking request.`,
        done:`${host} hopes you had a great stay.`
    };
    return someBooking[booking]??"Unknown booking status";
}
console.log(getStatus("John Host","Mary User",booking1.status));
console.log(getStatus("John Host","Mary User",booking2.status));