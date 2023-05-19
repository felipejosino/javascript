var btn = window.document.querySelector('input#btn')
var print = window.document.querySelector('div#print')

function verificarAnoBissexto() {
    // window.alert(`Desafio em manutenção, voltaremos em breve...`)

    let inputAno = window.prompt(`Qual é o ano que você quer verificar ?`)

    let regexNum = new RegExp('[^0-9]')

    function statusDesafio(num){
        return num == null
    }
    
    function verificarNum(num){
        return regexNum.test( parseInt(num) ) || !isFinite(num)
    }

    if( statusDesafio(inputAno) ){
        print.innerHTML = `<p>Cancelou desafio!</p>`
        console.log( statusDesafio(inputAno) )
        console.log( inputAno )
        return
    }

    if(inputAno.length > 4){
        print.innerHTML = `<mark id="vermelho">[ERRO] Valor inválido</mark>`
        console.log( verificarNum(inputAno) )
        console.log( inputAno )
        return
    }

    ano = parseInt ( inputAno )

    if( verificarNum( ano ) ){
        print.innerHTML = `<p><mark id="vermelho">[ERRO] Preencha valor do Ano corretamente!</mark></p>`
        console.log( verificarNum(ano) )
        console.log( ano )
        return
    } 

    if(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
        print.innerHTML = `O ano ${ano} <mark id="verde">É BISSEXTO</mark> \u{2705}`
        return
    }
    print.innerHTML = `O ano ${ano} <mark id="vermelho">NÃO É BISSEXTO</mark> \u{274C}`
}

btn.addEventListener('click', function(){
    verificarAnoBissexto()
})
