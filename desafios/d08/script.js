var btn = window.document.querySelector('input#btn')
var print = window.document.querySelector('div#print')

function calcularDesconto() {

    // window.alert(`Desafio em manutenção, voltaremos em breve...`)

    let inputProduto = window.prompt(`Qual é o produto que você está comprando?`)
   
    if( inputProduto == null ){
        print.innerHTML = `<p>Cancelou desafio!</p>`
        return
    }

    let nomeProduto = inputProduto.split(" ").filter( value => value != "").join(" ")

    let regexLetra = new RegExp('[^a-zA-Z \u00c0-\u00FF]', 'gi')
    let regexNumero = new RegExp('^0-9')

    function verificarNome(nomeProduto){
        return  nomeProduto == "" || regexLetra.test(nomeProduto)
    }

    if (verificarNome(nomeProduto)){
        print.innerHTML = `<p>[ERRO] Preencha o campo nome corretamente!</p>`
        console.log(verificarNome(nomeProduto))
        return
    }

    let inputValorProduto = window.prompt(`Qual é o preço de ${nomeProduto}?  Ex:. 795.98`)

    if( inputValorProduto == null ){
        print.innerHTML = `<p>Informe o valor do produto</p>`
        console.log( inputValorProduto )
        return
    }
   
    let valorDoProduto =  parseFloat( inputValorProduto.replace(',' , '.') )

    function verificarNum(num){
        return regexNumero.test( parseFloat(num) ) || !isFinite(num)
    }
    
    if( verificarNum(valorDoProduto) ){
        print.innerHTML = `<p>[ERRO] Preencha valor do produto corretamente!</p>`
        console.log( verificarNum(valorDoProduto) )
        return
    } 

    function statusDesafio(status){
        return status == null
    }
    
    if( statusDesafio(valorDoProduto) ){
        print.innerHTML = `<p>Voce cancelou desafio!</p>`
        console.log( statusDesafio(valorDoProduto) )
        return
    }

    let valorDesconto = (10 / 100) * valorDoProduto
    let valorFinal = valorDoProduto - valorDesconto
    
    print.innerHTML = 
    `
        <h2>Calculando desconto de 10% para ${nomeProduto}</h2>
        <br>
        <p>O Preço original era ${valorDoProduto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>
        <br>
        <p>Você acaba de ganhar ${valorDesconto.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} de desconto (-10%).</p>
        <br>
        <p>No fim, você vai pagar ${valorFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no produto ${nomeProduto}</p>

    `
    console.log(nomeProduto)
    console.log(valorDesconto)
    console.log(valorFinal)
}

btn.addEventListener('click', function(){
    calcularDesconto()
})
