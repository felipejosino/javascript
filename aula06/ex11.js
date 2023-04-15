var idade = 71
console.log(`Voce tem ${idade} anos.`)

if(idade < 16){
    console.log('Não vota')
}else if(idade < 18 || idade > 70){
    console.log('Voto Facultativo')
}else{
    console.log('Voto Obrigatório')
}