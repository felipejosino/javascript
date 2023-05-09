var btn = window.document.querySelector('input#btn')
var print = window.document.querySelector('div#print')

function calcularDesconto() {

    window.alert(`Desafio em manutenção, voltaremos em breve...`)

    // let nomeProd = window.prompt(`Qual é o produto que você está comprando?`)
    // let valorProd = parseFloat(window.prompt(`Qual é o preço de ${nomeProd}?  Ex:. 795.98`))
    
    // let valorDesconto = (10 / 100) * valorProd
    // let valorFinal = valorProd - valorDesconto
    
    // print.innerHTML = 
    // `
    //     <h2>Calculando desconto de 10% para ${nomeProd}</h2>
    //     <p>O Preço original era ${valorProd.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>
    //     <p>Você acaba de ganhar ${valorDesconto.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} de desconto (-10%).</p>
    //     <p>No fim, você vai pagar ${valorFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no produto ${nomeProd}</p>

    // `

}

btn.addEventListener('click', function(){
    calcularDesconto()
})
