

function contar() {
    let inicio = Number(window.document.querySelector('input#ini').value)
    let fim = Number(window.document.querySelector('input#fim').value)
    let pulos = Number(window.document.querySelector('input#pulos').value)
    let resu = window.document.querySelector('div#resu')
    resu.innerHTML = ''
    if (inicio == '' || fim == '') {
        resu.innerHTML = '[ERRO]: Atribua os valores aos inputs'
    } else {
        if (inicio >= fim) {
            if (pulos === 0 || pulos === '') {

                window.alert('[Erro] pulos não informados ou igual a 0, vamos trocar por 1')
                pulos = 1
            }

            let cont = inicio
            do {

                resu.innerHTML += `${cont}`

                cont -= pulos

                if (cont >= fim) {
                    resu.innerHTML += ' &#x1F435&#x1F449&#x1F34C '
                }
            } while (cont >= fim)

            resu.innerHTML += ' &#x1F435&#x1F34C'


        } else {
            if (pulos === 0 || pulos === '') {

                window.alert('[Erro] pulos não informados ou igual a 0, vamos trocar por 1')
                pulos = 1

            }
            let cont = inicio
            do {

                resu.innerHTML += `${cont}`

                cont += pulos

                if (cont <= fim) {
                    resu.innerHTML += ' &#x1F435&#x1F449&#x1F34C '
                }
            } while (cont <= fim)

            resu.innerHTML += ' &#x1F435&#x1F34C'

        }
    }
}