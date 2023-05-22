var btn = window.document.querySelector(`input#btn`)
var print = window.document.querySelector(`div#print`)

function verificarPreco(){

    // window.alert(`Desafio em manutenção, voltaremos em breve...`)


    let inputPrecoAntigo = window.prompt(`Qual era o preço do produto?`)

    let regexNum = new RegExp('^0-9')

    function statusDesafio(status){
        return status == null
    }
    
    function verificarNum(num){
        return regexNum.test( parseFloat(num) ) || !isFinite(num)
    }

    if( statusDesafio(inputPrecoAntigo) ){
        print.innerHTML = `<p>Cancelou desafio!</p>`
        console.log( statusDesafio(inputPrecoAntigo) )
        console.log( inputPrecoAntigo )
        return
    }

    precoAntigo = parseFloat ( inputPrecoAntigo )

    if( verificarNum( precoAntigo ) ){
        print.innerHTML = `<p><mark id="vermelho">[ERRO] Preencha valor do preço anterior do produto corretamente!</mark></p>`
        console.log( verificarNum(inputPrecoAntigo) )
        console.log( verificarNum(precoAntigo) )
        console.log( precoAntigo )
        return
    } 

    let inputPrecoAtual = window.prompt(`Qual é o preço atual do produto ?`)

    if( statusDesafio(inputPrecoAtual) ){
        print.innerHTML = `<p>Cancelou desafio!</p>`
        console.log( statusDesafio(inputPrecoAtual) )
        console.log( inputPrecoAtual )
        return
    }

    precoAtual = parseFloat ( inputPrecoAtual )

    if( verificarNum( precoAtual ) ){
        print.innerHTML = `<p><mark id="vermelho">[ERRO] Preencha valor do preço atual do produto corretamente!</mark></p>`
        console.log( verificarNum(inputPrecoAntigo) )
        console.log( verificarNum(precoAntigo) )
        console.log( precoAntigo )
        return
    } 

        let diferenca = precoAtual - precoAntigo
        let variacaoDePreoco = (precoAtual - precoAntigo) / precoAntigo * 100
        
        print.innerHTML = ` 
         <p>O produto custava ${precoAntigo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa ${precoAtual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>
        <br>
        `

        if(precoAntigo < precoAtual){

            print.innerHTML +=`
            <p>Hoje o produto está mais caro.</p>
            <br>
            <p>O preço subiu ${diferenca.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>
            <br>
            <p>Uma variação de ${variacaoDePreoco.toFixed(2)}% para cima.</p>
            `
            return

        }

        print.innerHTML += `
        <p>Hoje o produto está mais barato.</p>
        <br>
        <p>O preço caiu ${diferenca.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>
        <br>
        <p>Uma variação de ${variacaoDePreoco.toFixed(2)}% pra baixo.</p>
        `

}

btn.addEventListener('click', function(){
    verificarPreco()
})
