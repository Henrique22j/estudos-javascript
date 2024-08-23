// função para ver se o numero é par ou impar
function parimpar(n){
    if(n%2==0){
        return 'par!'
    }else{
        return 'impar!'
    }
}

let res = parimpar(10);

console.log(res)