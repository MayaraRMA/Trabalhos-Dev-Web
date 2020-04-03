const calcular = () => {
    let gasolina = parseToFloat('gasolina');
    let alcool = parseToFloat('alcool');

    const combustivel = document.querySelector(".combustivel");

    if (alcool/gasolina <= 0.7) {
        combustivel.className += " alcool"
        combustivel.textContent = "Álcool"
    } else {
        combustivel.className += " gasolina"
        combustivel.textContent = "Gasolina"
    }
}

const parseToFloat = (id) => {
    let div = document.getElementById(id);

    let divValue = parseFloat(div.value.replace(",", "."))

    return divValue
}
