let arrNum = [];
const resu = document.querySelector('div#resu')

// validar se o valor é valido ou não
function validador(numVar) {
    let BoleanVar = false;

    if (numVar <= 0 || numVar >= 100) {
        return true
    }
    for (let cont = 0; cont < arrNum.length; cont++) {
        if (numVar === arrNum[cont] || numVar === null) {
            return true
        }
    }


    return false
}

function adicionar() {
    resu.innerHTML = ''

    const num = document.querySelector("input#num")
    const Tabu = document.querySelector("select#tab")
    let numero = Number(num.value)

    if (validador(numero)) {
        window.alert('[ERRO] numero ja existente na lista ou valor invalido.')
    } else {
        arrNum.push(numero)
        console.log(arrNum)
        let item = document.createElement('option')// criando o elemento option
        item.text = `Valor ${numero} Adicionado.`// adicionando o texto do mesmo
        item.value = `${numero}`// adicionando o valor do mesmo
        Tabu.appendChild(item) // intregando com o elemento tabu

    }

        num.value = ''
        num.focus()

}

function finalizar() {
    if (arrNum == '') {
        window.alert('[ERRO] lista vazia.')
    } else {
        let soma = 0
        for (let cont = 0; cont < arrNum.length; cont++) {
            console.log(arrNum[cont])
            soma += arrNum[cont]
        }

        resu.innerHTML = `<p>Ao todo temos ${arrNum.length} números cadastrados</p><br>`
        resu.innerHTML += `<p>O maior valor informado foi ${Math.max(...arrNum)}</p><br>`
        resu.innerHTML += `<p>O menor valor informado foi ${Math.min(...arrNum)}</p><br>`
        resu.innerHTML += `<p>A soma de todos os valores é igual a ${soma}</p><br>`
        resu.innerHTML += `<p>A média dos valores digitados é ${soma / arrNum.length}</p>`
    }




}
