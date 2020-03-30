const calcular = () => {

    let km = parseToFloat('quilometragem')
    let litros = parseToFloat('litros');

    let totalDiv = document.getElementById('total');

    let total = 0

    if(litros > 0) {
        total = km/litros;
        total = total.toString().replace(".", ",")
        totalDiv.innerText = `${total} km/l`
    } else {
        totalDiv.innerText = "A quantidade de litros deve ser maior que zero"
    }
;
}

const parseToFloat = (id) => {
    let div = document.getElementById(id);

    let divValue = parseFloat(div.value.replace(",", "."))

    return divValue
}
