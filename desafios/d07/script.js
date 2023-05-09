var btn = window.document.querySelector(`input#btn`)
var print = window.document.querySelector(`div#print`)

function converterReal(){

    window.alert(`Desafio em manutenção, voltaremos em breve...`)

    // let valorDolar = parseFloat(window.prompt(`Antes de mais nada. Quanto está a cotação do dólar agora ?`))

    // let valorReais = parseFloat(window.prompt(`Quantos R$ você tem na carteira ?`))

    // //Cotação 09/05/2023  5,00 Real = 1 Dólar
    
    // let valorConvertido = (valorReais / valorDolar)

    // print.innerHTML = 
    // `   <p>Cotação do dólar : ${valorDolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
    //     <h2>Seu valor ${valorReais.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} convertido em dólar é ${valorConvertido.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</h2>
    //     `
    //     console.log(`${valorReais} , ${valorDolar}, ${valorConvertido}`)
}

btn.addEventListener('click', function(){
    converterReal()
})