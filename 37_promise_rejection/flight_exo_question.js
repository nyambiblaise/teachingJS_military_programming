/**
 * @param {number} milliseconds
 */
export const fakeFetch = (endpoint) => {
    return new Promise((resolve, reject) => {
        if (endpoint !== "flight-status") {
            reject("Invalid endpoint. Only flight-status is supported.")
        }
        // https://codetogo.io/how-to-get-random-number-between-two-numbers-in-javascript/
        const min = 1;
        const max = 2;
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;

        const dataToResolve = {
            departed: false,
            delayed: true
        };

        setTimeout(() => {
            resolve(dataToResolve);
        }, rand * 1_000);
    });
}
