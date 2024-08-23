function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('por favor, digite um numero!')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // APAGAR O VALOR ATUAL DO SELECT PARA SER SOBESCRITO PELO PROXIMO
        while (c <= 10) {
            // adicionar uma tabuada no select
            let item = document.createElement('option') //traz o elemento option para o javascript
            item.text = `${n} x ${c} = ${n*c}`//adiciona o resulto na option
            item.value = `tab${c}`// adicionar o valor (importante para outras linguagens)
            tab.appendChild(item)//cria as options dentro do select
            c++

        }
    }
    
}