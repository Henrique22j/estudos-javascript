
// RECURSIVIDADE
function fatorial(n){

    if(n == 1){
        return 1
    } else{
        return n * fatorial(n-1)
    }

}
console.log(fatorial(5))


/*

    5fat = 5 x 4 x 3 x 2 x 1
    5fat = 5 x 4fat dar para fazer o calculo do fatorial usando o fatorial de outro numero

    nfat = n x (n-1fat)
    1fat = 1 o fatorial de 1 é 1

*/