var btn = window.document.querySelector(`input#btn`)
var print = window.document.querySelector(`div#print`)

function converterReal(){

    let inputDolar = window.prompt(`Antes de mais nada. Quanto está a cotação do dólar agora ?`)
    
    let regexNum = new RegExp('^0-9')

    if( inputDolar == null ){
        print.innerHTML = `<p>Informe o valor da cotação do Dólar</p>`
        console.log( inputDolar )
        return
    }

    let valorDoDolar = parseFloat( inputDolar.replace(',' , '.') )

    function verificarNum(num){
        return regexNum.test( parseFloat(num) ) || !isFinite(num)
    }
    
    if( verificarNum(valorDoDolar) ){
        print.innerHTML = `<p>[ERRO] Preencha valor da cotação corretamente!</p>`
        console.log( verificarNum(valorDoDolar) )
        return
    } 

    function statusDesafio(status){
        return status == null
    }
    
    if( statusDesafio(valorDoDolar) ){
        print.innerHTML = `<p>Voce cancelou desafio!</p>`
        console.log( statusDesafio(valorDoDolar) )
        return
    }

    let inputReal = window.prompt(`Quantos R$ você tem na carteira ?`)

    if( statusDesafio(inputReal) || inputReal == "" ){
        print.innerHTML = `<p>Insira o valor que voce possui para converter!</p>`
        console.log( statusDesafio(inputReal) )
        return
    }

    let valorDoReal = parseFloat( inputReal.replace(',' , '.') )

    if( verificarNum(valorDoReal) ){
        print.innerHTML = `<p>[ERRO] Preencha valor que possui para conversão corretamente!</p>`
        console.log( verificarNum(valorDoReal) )
        return
    } 

    //Cotação 09/05/2023  5,00 Real = 1 Dólar
    
    let valorConvertido = (valorDoReal / valorDoDolar)

    print.innerHTML = 
    `   
    <p><small>Cotação do dólar :</small> ${valorDoDolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
    <br>
    <h2><small>Seu valor</small> ${valorDoReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <small>convertido em dólar é</small> ${valorConvertido.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</h2>
        `
    console.log(`${valorDoReal} , ${valorDoDolar}, ${valorConvertido}`)
}

btn.addEventListener('click', function(){
    converterReal()
})