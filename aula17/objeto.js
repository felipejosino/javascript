let pessoa = {
    nome: 'Felipe',
    sexo: 'M',
    peso: 65,
    engondar(p=0){
        this.peso += p
    }
}
pessoa.engondar(5) // chama function dentro do objeto passando parametro para aumentar
                   //substitua valor 5, para um que deseja
                   
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg`)