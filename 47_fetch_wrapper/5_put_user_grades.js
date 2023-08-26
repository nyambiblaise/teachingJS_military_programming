/*
In this challenge, the user fills the student's grade (a number between 0 and 20) and submits the form.
Once the user clicks on the Save button, you should send the grade to the API.
Complete the saveGrade function using the API documentation below.

API Documentation
Base URL: https://api.learnjavascript.online/demo/ Endpoint: grades.json Method: POST
Body: {grade: 15} (replace 15 with the actual grade)

Please note that fetch requests to these demo APIs are throttled. If you request it too many times in a short amount of time, you will have to wait 60 seconds until you're able to access it again. This is to prevent (accidental) abuse.

We recommend that you use the exported FetchWrapper from fetch-wrapper.js.
 */
import FetchWrapper from "./FetchWrapper.js";
const url = "https://api.learnjavascript.online/demo/";
const fetchWrapper = new FetchWrapper(url);
