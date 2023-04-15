let num = [5, 8, 4, 9]

console.log(`-`)
console.log(`-------- ( Inicio do Vetor ) ---------| `)
console.log(num)
console.log(`-`)
console.log(`O vetor tem: ${num.length} posições`)

console.log(`-`)
console.log(`------ ( Adicionando elemento ) ------|`)
num.push(7)
console.log(num)
console.log(`O vetor tem: ${num.length} posições`)

console.log(`-`)
console.log(`------ ( Ordenando valores ) ---------|`)
num.sort()
console.log(num)
console.log(`O vetor tem: ${num.length} posições`)

console.log(`-`)
console.log(`---------- ( Localizando ) -----------|`)

let pos = num.indexOf(9) // substitua valor 9, para um que deseja para localizar no array
console.log(num)

if(pos == -1){ //valor -1 referece ao valor que não existe no array acima
    console.log(`O valor não foi localizado! Certifique-se que o valor existe no Vetor!`)
}else{
    console.log(`Valor está na posição: ${pos}`) // lembre-se que vetor inicia [0]
}
console.log(`--------------------------------------|`)



