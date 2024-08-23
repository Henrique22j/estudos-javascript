function tabuada() {
    let num = window.document.getElementById('num')
    let resu = window.document.getElementById('resu')
    // verificar se o input esta vazio
    if(num.value.length == 0){
        window.alert('[ERRO] por favor digite novamente')
    } else{
        // tabuada
         let cal = 0
         let numN = Number(num.value)
         resu.innerHTML = ''// apagar o valor do textarea para se sobescrito pelo proximo valor
        for (let cont = 0; cont <= 10; cont++){
            cal = numN * cont 
            resu.innerHTML += `${numN} x ${cont} = ${cal}  \n` 
        }
    
    }
}