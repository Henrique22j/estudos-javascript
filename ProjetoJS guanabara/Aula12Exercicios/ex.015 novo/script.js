let anotxt = document.querySelector('input#ano')
let resu = document.querySelector('div#resu')
let data = new Date();
let anoAtual = data.getFullYear()
function carregar() {
    //verificar dados validos
    if (Number(anotxt.value) > anoAtual || anotxt.value === "") {
        resu.innerHTML = '<p>ERRO.</p>'
        window.alert('Dados invalidos, por favor digite dados validos.')
    } else {
        let sex = document.getElementsByName('sexo')
        let idade = anoAtual - Number(anotxt.value)
        let img = window.document.createElement('img')
        // masculino
        if (sex[0].checked) {
            document.body.style.backgroundColor = 'lightblue'
            if (idade <= 10) {
                resu.innerHTML = `<p>É um garoto de ${idade} anos.</p>`
                img.setAttribute('src', 'imagens/criança-m.png')
            } else if (idade <= 22) {
                resu.innerHTML = `<p>É um mano de ${idade} anos</p>`
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade <= 50) {
                resu.innerHTML = `<p>É um homem de ${idade} anos`
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else if (idade <= 120) {
                resu.innerHTML = `<p>É um senhor de ${idade} anos`
                img.setAttribute('src', 'imagens/idoso-m.png')
            } else {
                document.body.style.backgroundColor = 'black'
                resu.innerHTML = `<p>É um morto muito louco de ${idade} anos</p>`
                img.setAttribute('src', 'imagens/esqueleto.gif')
            }



            // feminino
        } else if (sex[1].checked) {
            document.body.style.backgroundColor = 'lightpink'
            if (idade <= 10) {
                resu.innerHTML = `<p>É uma garota de ${idade} anos.</p>`
                img.setAttribute('src', 'imagens/criança-f.png')
            } else if (idade <= 22) {
                resu.innerHTML = `<p>É uma mina de ${idade} anos</p>`
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade <= 50) {
                resu.innerHTML = `<p>É uma mulher de ${idade} anos`
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else if (idade <= 120) {
                resu.innerHTML = `<p>É uma senhora de ${idade} anos`
                img.setAttribute('src', 'imagens/idoso-f.png')
            } else {
                document.body.style.backgroundColor = 'black'
                resu.innerHTML = `<p>É um morto muito louco de ${idade} anos</p>`
                img.setAttribute('src', 'imagens/esqueleto.gif')
            }

        }
        resu.appendChild(img)
    }

}