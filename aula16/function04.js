// Resolver Fatorial

function fatorial(n){
    let fat = 1

    for(let contador = n; contador > 1; contador--) {
        fat *= contador
    }
    return fat
}
console.log(fatorial(5))