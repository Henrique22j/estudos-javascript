let valores = [8,1,7,4,2,9]
valores.sort()

    // maneira padrão
// console.log(valores)

    //maneira customizada trabalhosa
// console.log(valores[0])
// console.log(valores[1])
// console.log(valores[2])
// console.log(valores[3])
// console.log(valores[4])
// console.log(valores[5])


    //maneira customizada tradicional
// for(pos = 0; pos < valores.length; pos++){
//     console.log(`A posição ${pos} contém o valor ${valores[pos]}`)
// }

    //maneira customizada simples
for(let pos in valores){
    console.log(`A posição ${pos} possui o valor ${valores[pos]}`)
}