/*
we use the .forEach() property to loop through all the elements of an array;
The .forEach(callback) method allows you to run the callback function for every item in that array.
A callback is a function definition passed as an argument to another function.
 */
let names = ["John","Mary","Jude","Ashu","Paul"];
const grades = [10,20,30,40];
function displayAllNamesUsingForEach() {
    names.forEach(function (name) {
        console.log(name);
    })
}
console.log(displayAllNamesUsingForEach());
// returning after performing .forEach();
//Complete the function sumGrades such that it returns the sum of all the grades it receives as a parameter.
function sumGrades(grades) {
    let sum = 0;
    grades.forEach(function (grade) {
        sum = sum + grade;
    });
    return sum;
}
console.log(sumGrades(grades));//should return 100
//Complete the function sumPositiveNumbers such that it returns the sum of all positive 2_numbers from the 2_numbers parameter it receives.
function sumPositiveNumbers(numbers) {
    let s = 0;
    numbers.forEach(function (number) {
        if(number>0){
            s = s + number;
        }
    });
    return s;
}
//Complete the function sumOddNumbers such that it returns the sum of all the odd 2_numbers from the 2_numbers parameter it receives.
function sumOddNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function (number) {
        if(number%2!==0){
            sum+=number;
        }
    });
    return sum;
}
/*
Complete the function getDropdown such that it returns the following HTML that will fill the existing <select></select> element. The HTML that's returned should look like the following:
It should start with: <option value="">Please select</option>
Then, for every country you should have the <option> for that. For example, for the country "Netherlands", you should have the following <option value="netherlands">Netherlands</option>
Notice how the value contains the country name in lower case. The remaining countries will need to show up as well following the same criteria.
 */
function getDropdown(countries) {
    let html = `<option value="">Please select</option>\n`;
    countries.forEach(function (country) {
        //console.log(country);
        html = html + `<option value=${country.toLowerCase()}>${country}</option>
        `;
    });
    return html;
}
const countries = ["Cameroon", "USA", "Germany"];
console.log(getDropdown(countries));

/*
Complete the function renderTableRows such that it returns the following HTML:
<tr>
    <td>label here</td>
    <td>value here</td>
</tr>
 */
function renderTableRows(rows) {
    let html = "";
    rows.forEach(function (row) {
        html = html + `
            <tr>
                <td>${row[0]}</td>
                <td>${row[1]}</td>
            </tr>
        `;
    });
    return html;
}
let table = [["Carbs", "17g"], ["Protein", "19g"], ["Fat", "5g"]];
console.log(renderTableRows(table));