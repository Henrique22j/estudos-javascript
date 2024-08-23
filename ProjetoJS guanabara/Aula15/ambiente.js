const num = [22,3,8]
num[3] = 6;
num.push(78)
num.sort((a,b) => a-b)
let pos = num.indexOf(22)

console.log(`Nosso vetor é o ${num}`)
console.log(`O tamanho do vetor é ${num.length}`)
console.log(`O primeiro elemento do vetor é ${num[0]}`)
if(pos == -1){
    console.log('o valor não foi encontrado :(')
} else{
   console.log(`O valor ${num[3]} está na posição ${pos}`) 
}

