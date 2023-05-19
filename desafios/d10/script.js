var btn = window.document.querySelector(`input#btn`)
var print = window.document.querySelector(`div#print`)
var explicação = window.document.getElementById(`p`)

explicação.innerHTML = `Considerando uma equação no formato <strong>a</strong>x<sup>2</sup>+ <strong>b</strong>x + <strong>c</strong> = 0, calcule valor de &Delta;<br>`

function bhaskara(){
    // window.alert(`Desafio em manutenção, voltaremos em breve...`)

    explicação.innerHTML = ``

    window.alert( //Regrais Gerais
    `Algumas Observações:
    Insira valores inteiros
    O valor de ( a ) não pode ser igual a zero;
    Delta negativo, a equação não possui raízes reais;
    Delta igual a zero, a equação possui raízes reais iguais; e
    Delta positivo, a equação possui duas raízes reais e distintas.
    `)

    let a //Coeficiente Quadrático
    let b //Coeficiente linear
    let c //Coeficiente Constante

    let regexNum = new RegExp('^0-9')

    let inputA = window.prompt(`Qual é o valor de ( a ).        Obs:. Valor de ( a ) diferente de 0`)

    function statusDesafio(num){
        return num == null
    }
    
    function verificarNum(num){
        return regexNum.test( parseInt(num) ) || !isFinite(num)
    }

    if( statusDesafio(inputA) ){
        print.innerHTML = `<p>Cancelou desafio!</p>`
        console.log( statusDesafio(inputA) )
        console.log( inputA )
        return
    }

    a = parseInt ( inputA )
    
    if(a == 0){
        print.innerHTML = `<p>[ERRO] O valor do a, tem que ser diferente de  0. </p>`
        return
    }

    if( verificarNum( a ) ){
        print.innerHTML = `<p>[ERRO] Preencha valor de ( a ) corretamente!  <br> Obs:. Valor de a, seja diferente de 0. </p>`
        console.log( verificarNum(a) )
        console.log( a )
        return
    } 

    let inputB = window.prompt(`Qual é o valor de ( b ).`)

    if( statusDesafio(inputB) ){
        print.innerHTML = `<p>Cancelou desafio!</p>`
        console.log( statusDesafio(inputB) )
        console.log( inputB )
        return
    }

    b = parseInt ( inputB ) 

    if( verificarNum( b ) ){
        print.innerHTML = `<p>[ERRO] Preencha valor de ( b ) corretamente!</p>`
        console.log( verificarNum(b) )
        console.log( b )
        return
    } 

    let inputC = window.prompt(`Qual é o valor de ( c ).`)

    if( statusDesafio(inputC) ){
        print.innerHTML = `<p>Cancelou desafio!</p>`
        console.log( statusDesafio(inputC) )
        console.log( inputC )
        return
    }

    c = parseInt ( inputC ) 

    if( verificarNum( c ) ){
        print.innerHTML = `<p>[ERRO] Preencha valor de ( c ) corretamente!</p>`
        console.log( verificarNum(c) )
        console.log( c )
        return
    } 

    let delta = b * b - 4 * a * c

    if(delta < 0){
        print.innerHTML = `<p>[ERRO] Preencha valor de ( c ) corretamente!</p>`
        return
    }

    explicação.innerHTML = ``

    print.innerHTML = 
    `   
    <p>A equação atual é <strong>${a}x<sup>2</sup>+ ${b}x + ${c} = 0</strong></p>
    <p>O cálculo realizado será <strong>&Delta; = ${b}<sup>2</sup> -4 . ${a} . ${c} </strong></p>
    <p>O valor calculado foi <strong><mark>&Delta; = ${delta}</mark></strong></p>
    `

    console.log(`a = ${a}. b = ${b}, c = ${c}`)
    

}

btn.addEventListener('click', function(){
    bhaskara()
})