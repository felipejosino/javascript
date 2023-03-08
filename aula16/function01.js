// par ou impar

function parImp(n){
    if(n % 2 ==0 ){
        return `Par!`
    }else{
        return `Impar!`
    }
}

// posso criar variavel e armazanar o resultado do retrun da function
// let resultado = parImp(10)
// console.log(`Numero informado é : ${resultado}`)

// ou direto
console.log(`O numero é: ${parImp(10)}`)