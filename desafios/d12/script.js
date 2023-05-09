var btn = window.document.querySelector(`input#btn`)
var print = window.document.querySelector(`div#print`)

function verificarPreco(){

    window.alert(`Desafio em manutenção, voltaremos em breve...`)

    // let precoAntigo = parseFloat(window.prompt(`Qual era o preço do produto?`))
    // let precoAtual = parseFloat(window.prompt(`Qual é o preço atual do produto ?`))

    // if(precoAntigo < precoAtual){

    //     let diferenca = precoAtual - precoAntigo
    //     let variacaoSubiu = (precoAtual - precoAntigo) / precoAntigo * 100
        
    //     print.innerHTML = ` 
        
    //     <p>O produto custava ${precoAntigo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa ${precoAtual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>

    //     <p>Hoje o produto está mais caro.</p>

    //     <p>O preço subiu ${diferenca.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>

    //     <p>Uma variação de ${variacaoSubiu.toFixed(2)}% para cima.</p>
        
    //     `
    //     return
    // }
    
    // let diferenca =  precoAntigo - precoAtual
    // let variacaoCaiu = ( precoAntigo - precoAtual) / precoAntigo * 100

    // print.innerHTML = 
    //     `
    //     <p>O produto custava ${precoAntigo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa ${precoAtual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>

    //     <p>Hoje o produto está mais barato.</p>

    //     <p>O preço caiu ${diferenca.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>

    //     <p>Uma variação de ${variacaoCaiu.toFixed(2)}% pra baixo.</p>
    //     `
    //     return
}

btn.addEventListener('click', function(){
    verificarPreco()
})
