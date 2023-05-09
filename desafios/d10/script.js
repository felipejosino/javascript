var btn = window.document.querySelector(`input#btn`)
var print = window.document.querySelector(`div#print`)
var explicação = window.document.getElementById(`p`)

explicação.innerHTML = `Considerando uma equação no formato <strong>a</strong>x<sup>2</sup>+ <strong>b</strong>x + <strong>c</strong> = 0, calcule valor de &Delta;`

function bhaskara(){
    window.alert(`Desafio em manutenção, voltaremos em breve...`)
    
    // let a = parseInt(window.prompt(`Qual é o valo de a.  E:. a > 0`))
    // let b = parseInt(window.prompt(`Qual é o valo de b.`))
    // let c = parseInt(window.prompt(`Qual é o valo de c`))
    
    // let delta = b * b - 4 * a * c

    // if(a == 0){
    //     window.alert(`O valor do a, tem que ser maior que 0.`)
    //     return
    // }

    // if( !a || !b || !c){
    //     window.alert(`Insira os Valores de a, b e c`)
    //     return
    // }

    // if(delta < 0){
    //     window.alert(`Sem raizes reais`)
    //     return
    // }

    // explicação.innerHTML = ``

    // print.innerHTML = 
    // `   
    // <p>A equação atual é <strong>${a}x<sup>2</sup>+ ${b}x + ${c} = 0</strong></p>
    // <p>O cálculo realizado será <strong>&Delta; = ${b}<sup>2</sup> -4 . ${a} . ${c} </strong></p>
    // <p>O valor calculado foi <strong><mark>&Delta; = ${delta}</mark></strong></p>
    // `

    // console.log(`a = ${a}. b = ${b}, c = ${c}`)
}

btn.addEventListener('click', function(){
    bhaskara()
})