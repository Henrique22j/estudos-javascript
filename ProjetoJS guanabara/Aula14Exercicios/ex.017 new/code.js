function Tabuada(){
    let Numero = Number(document.querySelector('input#Num').value)
    let Resu = document.querySelector("select#resu")
    if(Numero.length == 0){
        window.alert("[ERRO] digite um valor valido")
    } else{
        Resu.innerHTML = ''
        for(cont = 1; cont <= 10; cont++){
            let item = document.createElement('option')
            item.text = `${Numero} x ${cont} = ${Numero*cont}`
            item.value = `tab${cont}`
            Resu.appendChild(item)

        }
    }
}