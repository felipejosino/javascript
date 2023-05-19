var btn = window.document.querySelector('input#btn')
var print = window.document.querySelector('div#print')

function reajusteSalarial() {

    // window.alert(`Desafio em manutenção, voltaremos em breve...`)

    let inputNomeFucnionario = window.prompt(`Qual é o nome do Funcionário?  EX:. Pedro Paulo`)

    if( inputNomeFucnionario == null ){
        print.innerHTML = `<p>Cancelou desafio!</p>`
        return
    }

    let nomeFuncionario = inputNomeFucnionario.split(" ").filter( value => value != "").join(" ")

    let regexLetra = new RegExp('[^a-zA-Z \u00c0-\u00FF]', 'gi')
    let regexNumero = new RegExp('^0-9')

    function verificarNome(nomeProduto){
        return  nomeProduto == "" || regexLetra.test(nomeProduto)
    }

    if (verificarNome(nomeFuncionario)){
        print.innerHTML = `<p>[ERRO] Preencha o campo nome corretamente!</p>`
        console.log(verificarNome(nomeFuncionario))
        return
    }

    let inputSalario = window.prompt(`Qual é o salário de ${nomeFuncionario} ?  E:x. 2850.25`)

    if( inputSalario == null ){
        print.innerHTML = `<p>Informe o valor do salario</p>`
        console.log( inputSalario )
        return
    }

    let salario =  parseFloat( inputSalario.replace(',' , '.') )

    function verificarNum(num){
        return regexNumero.test( parseFloat(num) ) || !isFinite(num)
    }
    
    if( verificarNum(salario) ){
        print.innerHTML = `<p>[ERRO] Preencha valor do salario corretamente!</p>`
        console.log( verificarNum(salario) )
        return
    } 

    function statusDesafio(status){
        return status == null
    }
    
    if( statusDesafio(salario) ){
        print.innerHTML = `<p>Voce cancelou desafio!</p>`
        console.log( statusDesafio(salario) )
        return
    }

    let inputReajuste = window.prompt(`O salário de ${nomeFuncionario} vai ser reajustado em qual porcentagem?  EX:. 18`)

    if( inputReajuste == null ){
        print.innerHTML = `<p>Informe o valor do reajuste</p>`
        console.log( inputReajuste )
        return
    }

    let reajuste = parseFloat( inputReajuste.replace(',' , '.') )

    if( verificarNum(reajuste) ){
        print.innerHTML = `<p>[ERRO] Preencha valor do reajuste corretamente!</p>`
        console.log( verificarNum(reajuste) )
        return
    } 

    if( statusDesafio(reajuste) ){
        print.innerHTML = `<p>Voce cancelou desafio!</p>`
        console.log( statusDesafio(reajuste) )
        return
    }

    let valorReajustado = (reajuste / 100) * salario

    let salarioFinal = salario + valorReajustado

    print.innerHTML = 
    `
        <h2>${nomeFuncionario} recebeu um aumento salarial !</h2>
        <br>
        <p>O salário atual era ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>
        <br>
        <p>Com um aumento de ${reajuste}%, o salário vai aumentar ${valorReajustado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no próximo mês.</p>
        <br>
        <p>E a partir daí, ${nomeFuncionario} vai passar a ganhar ${salarioFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
    `
    console.log(nomeFuncionario)
    console.log(salario)
    console.log(reajuste)

}

btn.addEventListener('click', function(){
    reajusteSalarial()
})
