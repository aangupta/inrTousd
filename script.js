const rupees = document.querySelector('#rupees');
const dollar = document.querySelector('#dollar');

function inrTousd() {
    fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=INR')
        .then((response) => response.json())
        .then((json) => {
            dollar.value = (rupees.value / json.rates.INR).toFixed(2);
        });
}
rupees.addEventListener('input', inrTousd);
function usdToinr() {
    fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=INR')
        .then((response) => response.json())
        .then((json) => {
            rupees.value = (dollar.value * json.rates.INR).toFixed(2);
        });
}
dollar.addEventListener('input', usdToinr);
