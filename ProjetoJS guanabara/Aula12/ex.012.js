var agora = new Date() // dar a data dependendo do sistema que no caso é meu pc
var hora = 22//agora.getHours() // entrega espercificamente as horas
console.log(`Agora são exatamente ${hora} horas`)
if( hora < 5){
    console.log('Boa madrugada!')
} else if(hora < 12){
    console .log('Bom dia!')
} else if(hora <= 17){
    console.log('boa tarde!')

}else{
    console.log('boa noite!')
}
