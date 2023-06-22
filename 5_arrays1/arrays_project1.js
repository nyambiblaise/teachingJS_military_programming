//Complete the function getEmptyArray such that it returns an empty array.
function getEmptyArray() {
    const names = [];
    return names;
}
//Complete the function getNumberOfElements such that it returns the number of items contained in the elements array it receives.
function getNumberOfElements(items) {
    return items.length;
}
//Complete the function useCalculator such that it adds the "Calculator" string to the apps array it receives. Then, return the apps array.
function useCalculator(apps) {
    apps.push("Calculator");
    return apps;
}
let software = ["VS Code","PHP Storm", "WhatsApp"];
console.log(useCalculator(software));

//Complete the function useApp such that the app variable is added to the apps array. Then, return the apps array.
function useApp(apps,app) {
    apps.push(app);
    return apps;
}