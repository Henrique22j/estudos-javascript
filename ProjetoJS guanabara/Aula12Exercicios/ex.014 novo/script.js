let msg = document.querySelector('div.hora')
let video = document.querySelector('video#midia')
let musica = document.querySelector('audio#musica')
function carregar() {
    let data = new Date()
    let horas = data.getHours();
    let minutes = data.getMinutes()
    msg.innerHTML = `<p>Agora são ${horas}:${minutes}.</p>`
    if (horas < 6) {
        video.src = 'videos/madrugada.mp4'
        musica.src = 'musicas/madrugada.mp3'
        document.body.style.backgroundImage = 'radial-gradient(circle, rgba(240,127,120,1) 0%, rgba(53,52,89,1) 100%)'

    } else if (horas <= 12) {
        video.src = 'videos/manha.mp4'
        musica.src = 'musicas/manha.mp3'
        document.body.style.backgroundImage = 'radial-gradient(circle, rgba(188,242,34,1) 50%, rgba(255,230,62,1) 100%)'

    } else if (horas <= 17) {
        video.src = 'videos/tarde.mp4'
        musica.src = 'musicas/tarde.mp3'
        document.body.style.backgroundImage = 'radial-gradient(circle, rgba(205,52,26,1) 0%, rgba(249,150,0,1) 100%)'
    } else {
        video.src = 'videos/noite.mp4'
        musica.src = 'musicas/noite.mp3'
        document.body.style.backgroundImage = 'radial-gradient(circle, rgba(255,37,37,1) 22%,rgba(53,61,82,1) 100%)'
    }

}
//setInterval(carregar, 1000*30)
/* carragar a funcao carregar() a cada 1 minuto
 "1000 é equivale a 1000 milisegundos ou 1 segundo"
*/



// setTimeout("func a ser chamada", "qnt tempo ela deve esperar para a func ser chamada");
function iniciarRelogio() {
    var agora = new Date();
    var segundosRestantes = 60 - agora.getSeconds();
    setTimeout(function () { 
        carregar();
        setInterval(carregar, 60000);
    }, segundosRestantes * 1000);
}

iniciarRelogio();