let amigo = {
    nome: 'Felipe',
    sexo: 'M',
    peso: 65,
    engondar(p=0){
        this.peso += p
    }
}
amigo.engondar(5) // chama funcition dentro do objeto passando parametro para aumentar
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)