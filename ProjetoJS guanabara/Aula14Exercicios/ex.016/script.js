function contador() {
    var inicio = window.document.querySelector('input#Inicio')
    var fim = window.document.querySelector('input#fim')
    var passo = window.document.querySelector('input#pas')
    var inNum = Number(inicio.value)
    var fimNum = Number(fim.value)
    var passNum = Number(passo.value)
    var resu = window.document.querySelector('div#resu')
    if (inicio.value.length == 0 || fim.value.length == 0) {
        window.alert('vocé deixou alguma coluna vazia, por favor digite um numero')
    } else if (passNum == 0 || passNum == '') {
        window.alert('valor invalido no passo, iremos sbstituir-lo por 1')
        passNum = 1
        for (cont = inNum; cont <= fimNum; cont += passNum) {
            resu.innerHTML = resu.innerHTML + ' ' + cont
        }

    } else {
        for (cont = inNum; cont <= fimNum; cont += passNum) {
            resu.innerHTML = resu.innerHTML + String.fromCodePoint(0x1F449) + cont
        }

    }

}












