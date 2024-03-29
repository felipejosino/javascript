var btn = window.document.querySelector('input#btn')
var print = window.document.querySelector('div#print')


function converterMedida(){

let input = window.prompt(`Digite uma distância em metros (m)     ex: 875.29`)

if( input == null){
    print.innerHTML = `<p>Voce cancelou desafio!</p>`
    return
}

let metros = input.replace(',', '.')

if(input == "" || metros == 0){
    print.innerHTML = `<p>Informe um valor para conversão!</p>`
    return
}

let regexNum = new RegExp('^0-9')

function verificarNum(num){
    return regexNum.test(parseFloat(num)) || !isFinite(num)
}

if( verificarNum(metros) ){
        print.innerHTML = `<p>[ERRO] Preencha valor do campo corretamente!</p>`

        console.log(verificarNum(metros))

        return
    }   

let km = parseFloat(metros /1000).toFixed(3).replace('.', ',')
let hm = parseFloat(metros /100).toFixed(3).replace('.', ',')
let dam = parseFloat(metros /10).toFixed(3).replace('.', ',')

let dm = parseFloat(metros *10).toLocaleString()
let cm = parseFloat(metros *100).toLocaleString()
let mm = parseFloat(metros *1000).toLocaleString()

print.innerHTML = 
    `<h2>A distância ${metros.replace('.', ',')} <small>metros</small>, corresponde a...</h2>
    <br>
    <p>${km} quilômetros (Km)</p> <br>
    <p>${hm} hectômetros (hm)</p> <br>
    <p>${dam} decâmetros (dam)</p> <br>
    <p>${dm} decímetros (dm)</p> <br>
    <p>${cm} centímetros (cm)</p> <br>
    <p>${mm} milímetros (mm)</p>

    `
    console.log(verificarNum(metros))
}

btn.addEventListener('click', function() {
    converterMedida()
})