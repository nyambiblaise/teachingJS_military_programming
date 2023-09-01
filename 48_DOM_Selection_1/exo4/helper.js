export const getSelectedCurrency = () => {
    const x = document.querySelector(".cards .card.active");
    return x.textContent;
}