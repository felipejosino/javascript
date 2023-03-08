// posso fazer o fatorial de uma maneira recursiva, ou seja quando uma função chama ela mesma
//RECURSIVA


function fatorial(n = 0){ // esta prevendo caso usuario nao digite nada  recebe valor = 0 logo, valor 0 cai no primeiro if
    if( n == 0 || n == 1){ // 1! = 1
        return 1 // caso n seja igual a 1! = 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(10))

/*
Logica: 
5! = 5 X 4 X 3 X 2 X 1
5! = 5 X 4!

termo geral 
n! = n x (n-1)!
1! = 1
0! = 1

*/