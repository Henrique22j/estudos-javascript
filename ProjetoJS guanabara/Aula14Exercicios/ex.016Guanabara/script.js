function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pass = document.getElementById('passo')
    let res = document.getElementById('resu')
    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0 ){
        window.alert('[ERRO] faltam dados!!!')
        res.innerHTML = 'impossivel contar'
    } else {
        res.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if (p <= 0) {
            window.alert('passo invalido, seu passo sera substituido por 1')
            p = 1
        }
        //contagem crescente 
        if(i < f) {
            for(let c = i; c <= f; c += p) {

            res.innerHTML += `${c} \u{1F449}`
            }
        //contagem decrescente
        }   else{
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F596}`
    }
}