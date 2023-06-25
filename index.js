//Fixando casas decimais nos valores
function formatMoney(value) {
    value = Math.ceil(value * 100) / 100 //Arredondando pra mais o valor final adicionando o calculo ele sempre vai arredondar a ultima casa
    value = value.toFixed(2)
    return '$' + value
}

//Ajustando a palavra person no plural e singular
function formatSplit(value) {
    if (value == 1) return value + ' person'
    return value + ' people'
}

function update() {
    //Trazendo os valores do HTML
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    //Calculando
    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split
    
    //Mostrando o resultado para o usuário
    document.getElementById('tipPercent').innerHTML = tipPercent + '%'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = formatMoney(billEach)

}