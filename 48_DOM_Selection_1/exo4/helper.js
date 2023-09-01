export const getSelectedCurrency = () => {
    const x = document.querySelector(".cards .card.active");
    console.log(x);
    return x.textContent;
}