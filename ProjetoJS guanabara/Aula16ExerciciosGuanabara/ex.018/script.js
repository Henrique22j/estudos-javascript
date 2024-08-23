
// Declarando lista e resultado
let listNum = []
let resu = window.document.querySelector('div#resu')
// Botão adicionar
function adicionar() {
    // variaveis principais
    let num1 = window.document.querySelector('input#num')
    let numN1 = Number(num1.value)
    let tabela = window.document.querySelector('select#tabel')
    let repetido = false
    

    //validador
    for(indi in listNum){
        if(numN1 == listNum[indi]){
            repetido = true
        }
        }
    


    if( numN1 > 100 || num1.value.length == 0 || repetido == true){

        window.alert('[ERRO] Valor invalido ou repetido, por favor digite novamente')

    } else{

        //criando a lista
        listNum.push(numN1) // adicionando numero a lista 
        let tamList = listNum.length - 1 //tamanho da lista
        let item = document.createElement('option')
        item.text = `Valor ${listNum[tamList]} adicionado`
        item.value = `tab${listNum[tamList]}`
        tabela.appendChild(item) 
        resu.innerHTML = ''
    }
     
}

function finalizar() {

    // validador
    if(listNum.length == 0){
         window.alert('por favor, adicione um valor primeiro')
    } else{
            //variavies e funçoes auxiliares
        
        let soma = 0
        listNum.sort()
        for (cont in listNum){
            soma += listNum[cont]
        }
        //criando paragrafos
        let p1 = document.createElement('p')
        let p2 = document.createElement('P')
        let p3 = document.createElement('p')
        let p4 = document.createElement('p')
        let p5 = document.createElement('p')
        //curiosidades da lista
        let pf1 = document.createTextNode(`A liste tem ${listNum.length} numeros cadastrados`)
        let pf2 = document.createTextNode(`O menor numero da lista é o ${listNum[0]}`)
        let pf3 = document.createTextNode(`O maior elemento da lista é o ${listNum[listNum.length - 1]}`)
        let pf4 = document.createTextNode(`A soma de todos os valores da lista é igual a ${soma}`)
        let pf5 = document.createTextNode(`A média dos valores da lista é ${soma / listNum.length}`)

        //adicionando valores ao html
        p1.appendChild(pf1)
        p2.appendChild(pf2)
        p3.appendChild(pf3)
        p4.appendChild(pf4)
        p5.appendChild(pf5)

        resu.appendChild(p1)
        resu.appendChild(p2)
        resu.appendChild(p3)
        resu.appendChild(p4)
        resu.appendChild(p5)
    }
       
   


    
}