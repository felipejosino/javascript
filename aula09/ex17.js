// aperte F8

console.log(`-------------- ( Original 1 opção)`)
let num = [8, 1, 9]
console.log(num)

for (let pos = 0; pos < num.length; pos++) {
    const element = num[pos];
   
    console.log(`A posição ${pos} tem valor ${element}`)
    
}
console.log(`-------------- ( Ordenado 2 opção)`)
console.log(num.sort())

for (let pos = 0; pos < num.length; pos++) {
    const element = num[pos];
   
    console.log(`A posição ${pos} tem valor ${element}}`)    
}

console.log(`-------------- ( Simplificado 3 opção )`)
//maneira mais simplificada

for(let pos in num){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}
