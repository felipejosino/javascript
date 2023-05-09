var btn = window.document.querySelector('input#btn')
var print = window.document.querySelector('div#print')

function verificarAnoBissexto() {

    window.alert(`Desafio em manutenção, voltaremos em breve...`)

    // var btn = window.document.querySelector(`input#btn`)
    // var print = window.document.querySelector(`div#print`)
    
    // btn.addEventListener('click', function(){
    //     let ano = window.prompt(`Qual é o ano que você quer verificar ?`)
    
    //     if(ano.length > 4){
    //         print.innerHTML = `<mark id="vermelho">[ERRO] Valor inválido</mark>`
    //         return
    //     }
    
    //     if(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
    //         print.innerHTML = `O ano ${ano} <mark id="verde">É BISSEXTO</mark> \u{2705}`
    //         return
    //     }
    //     print.innerHTML = `O ano ${ano} <mark id="vermelho">NÃO É BISSEXTO</mark> \u{274C}`
    
      
    // })
}

btn.addEventListener('click', function(){
    verificarAnoBissexto()
})
