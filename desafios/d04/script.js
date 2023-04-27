var btn = window.document.querySelector('input#btn')
var print = window.document.querySelector(`div#print`)

function verificarCompra(){
    let prod = window.prompt(`Que produto voce está comprando ?`)
     
    if(prod == null){
        print.innerHTML = `<p>Cancelou desafio!</p>`
        return
    }

    let nomeProduto = prod.split(" ").filter( value => value != "").join(" ")

    let regexLetra = new RegExp('[^a-zA-Z \u00C0-\u00FF]', 'gi')
    let regexNum = new RegExp('[^0-9]')

    function verificarNome(nomeProduto){
        return  nomeProduto == "" || nomeProduto == null || regexLetra.test(nomeProduto)
    }

    function calTroco(valorPro, valorPago){
     
            return valorPago - valProd

    }

    if (verificarNome(nomeProduto)){
        print.innerHTML = `<p>[ERRO] Preencha o campo nome corretamente!</p>`
        return
    }

    let valProd = Number(window.prompt(`Quanto custa ${nomeProduto} que voce está comprando ?`))

    if(regexNum.test(valProd) || !isFinite(valProd)){
        print.innerHTML = `<p>[ERRO] Preencha valor do produto corretamente!</p>`
        return
    }

    if(valProd == ""){
        print.innerHTML = `<p>Voce não informou valor do produto!</p>`
        return
    }
    
    let valPago = Number(window.prompt(`Qual foi o valor que voce deu para pagar ${nomeProduto} ?`))

    if(regexNum.test(valPago) || !isFinite(valPago)){
        print.innerHTML = `<p>[ERRO] Preencha valor pago corretamente!</p>`
        return
    }


    if(valPago < valProd){
        print.innerHTML = 
        `
            <p>Voce comprou ${ nomeProduto } que custa ${ valProd.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }.</p> <br>
    
            <p>Deu ${ valPago.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }, logo, voce ficou devendo valor de ${ calTroco(valProd,valPago).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }.</p> <br>
    
        `
        return

    }
    
    print.innerHTML = 
    `
        <p>Voce comprou ${ nomeProduto } que custa ${ valProd.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) }.</p> <br>

        <p>Deu ${ valPago.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) } em dinheiro e vai receber ${ calTroco(valProd,valPago).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) } de troco.</p> <br>

        <p>Volte Sempre!</p>
    `
}

btn.addEventListener('click', function () {
    verificarCompra()
})