/*
The user is asked to select a currency by clicking on it. When a .card is clicked, we add the class active to it and remove the class active from the previous card. So, only one currency can be selected at a time. Try it out in the browser tab by clicking on the currencies!

This highlighted effect is coming from the class active that you can find at the end of the index.css.

Complete the getSelectedCurrency function such that it returns the currency that the user selected. Return the text from the card that is selected.
 */
import {getSelectedCurrency} from "./helper.js";

document.querySelectorAll(".cards .card")
    .forEach(card => {
        card.addEventListener("click", event => {
            document.querySelector(".cards .card.active").classList.remove("active");
            event.currentTarget.classList.add("active");
            console.log(getSelectedCurrency());
        });
    })