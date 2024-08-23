function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#resultado')
    // verificar dados invalidos
    if ( fano.value == ''  || fano.value > ano) {
        window.alert('Verifique os dados e digite novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
       var genero = ''
       var img = window.document.createElement('img')
       img.setAttribute('id','foto')
       // verificar o sexo
       if (fsex[0].checked) {
            genero = 'um Homem'
            //verificar idade
            if (idade >=0 && idade < 12){
                // Criança
                img.setAttribute('src', 'criança-m.png')
            } else if (idade < 21){
                // Adolescente
                img.setAttribute('src', 'jovem-m.png')
             } else if (idade < 60){
                // Adulto
                img.setAttribute('src', 'adulto-m.png')
             }  else {
                // idoso
                img.setAttribute('src', 'idoso-m.png')
            }
       } else if (fsex[1].checked) {
            genero = 'uma Mulher'
            // verificar idade
            if (idade >=0 && idade < 12){
                // Criança
                img.setAttribute('src','criança-f.png')
            } else if (idade < 21){
                // Adolescente
                img.setAttribute('src','jovem-f.png')
            } else if (idade < 60){
                // Adulto
                img.setAttribute('src','adulto-f.png')
            } else {
                // idoso
                img.setAttribute('src','idoso-f.png')
            }
       }
    }
    
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}