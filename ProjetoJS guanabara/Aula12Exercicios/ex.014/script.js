function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom Dia
        img.src = 'Foto-Manhã.png'
        document.body.style.background = "#ced39a"
    } else if (hora >= 12 && hora < 18){
                // Boa Tarde
                img.src = 'Foto-Tarde.png'
                document.body.style.background = "#e38461"
            } else {
                // Boa Noite
                img.src = 'Foto-Noite.png'
                document.body.style.background = "#2f2f30"
            }

}
