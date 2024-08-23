let Amigo = {
    nome: "José",
    sexo: "Masculino",
    peso: 100.0,
    altura: 1.95,
    ingordar(p){
        console.log(`Ingordou ${p}Kg`)
         this.peso += p;
    },
    emagrecer(p){
        console.log(`emagreceu ${p}Kg`)
        this.peso -= p;
    }
}
Amigo.emagrecer(10)
console.log(Amigo)
