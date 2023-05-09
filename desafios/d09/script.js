var btn = window.document.querySelector('input#btn')
var print = window.document.querySelector('div#print')

function reajusteSalarial() {

    window.alert(`Desafio em manutenção, voltaremos em breve...`)

    // let nomeFun = window.prompt(`Qual é o nome do Funcionário?  EX:. Pedro Paulo`)
    // let salario = parseFloat(window.prompt(`Qual é o salário de ${nomeFun} ?  E:x. 2850.25`))
    // let reajuste = parseFloat(window.prompt(`O salário de ${nomeFun} vai ser reajustado em qual porcentagem?  EX:. 18`))

    // let valorReajustado = (reajuste / 100) * salario

    // let salarioFinal = salario + valorReajustado

    // print.innerHTML = 
    // `
    //     <h2>${nomeFun} recebeu um aumento salarial !</h2>

    //     <p>O salário atual era ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>
    //     <p>Com um aumento de ${reajuste}%, o salário vai aumentar ${valorReajustado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no próximo mês.</p>
    //     <p>E a partir daí, ${nomeFun} vai passar a ganhar ${salarioFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
    // `

}

btn.addEventListener('click', function(){
    reajusteSalarial()
})
