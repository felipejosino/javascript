var btn = window.document.querySelector('input#btn')
var print = window.document.querySelector('div#print')


function converterTemperatura(){
    // window.alert(`Desafio em manuteção...`)

let input = window.prompt(`Digite uma temperatura em °C (Celsius).  Ex: 35.7 `)

if( input == null){
    print.innerHTML = `<p>Voce cancelou desafio!</p>`
    console.log(input)
    return
}

if(input == ""){
    print.innerHTML = `<p>Informe um valor para conversão!</p>`
    console.log(input)
    return
}

let celsius = parseFloat(input.replace(',', '.'))

let regexNum = new RegExp('^0-9')

function verificarNum(num){
    return regexNum.test(parseFloat(num)) || !isFinite(num)
}

if( verificarNum(celsius) ){
    print.innerHTML = `<p>[ERRO] Preencha valor do campo corretamente!</p>`
    console.log(verificarNum(celsius))
    return
} 

let kelvin = (celsius + 273.15).toLocaleString()

let fahrenheit = (celsius * 1.8 + 32).toLocaleString()

print.innerHTML = 
`   <h2>A temperatura de ${celsius}°C, corresponde a...</h2><br>
    <p>${kelvin}°K (Kelvin)</p>
    <p>${fahrenheit}°F (Fahrenheit)</p>
    
    <br><br>
    
    <h3>Fórmula:</h3>
    <br>
    <p>Kelvin: <small><strong>${celsius}°C + 273.15</strong> = ${kelvin}°K</small></p>
    <br>
    <p>Fahrenheit: <small><strong>(${celsius}°C x 9/5) + 32</strong> = ${fahrenheit}°F</small></p>
`
    console.log(celsius)
}

btn.addEventListener('click', function() {
    converterTemperatura()
})