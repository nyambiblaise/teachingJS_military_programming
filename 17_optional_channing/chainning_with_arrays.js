//Assuming the code below, where the key temperatures might be undefined:
const data = {
    temperatures: [-3, 14, 4]
}
let firstValue = undefined;
if (data.temperatures) {
    firstValue = data.temperatures[0];
}
//We can refactor it into:
const firstValue = data.temperatures?.[0];