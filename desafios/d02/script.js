var btn = window.document.querySelector('input#btn')
var print = window.document.querySelector('div#print')

function dados(){

    let nome = window.prompt(`Qual é o seu nome?`)
    let idade  = window.prompt(`Quantos anos voce tem ? [Apenas numeros]`)

    let regexLetra = new RegExp('[^a-zA-Z \u00C0-\u00FF]','gi')
    let regexNumero = new RegExp('[^0-9]')

    if(nome == "" || nome == " " || regexLetra.test(nome)){
        print.innerHTML = '[ERRO] Preencha o campo nome corretamente!'
        return
    }

    if(regexNumero.test(idade) || !isFinite(idade)){
        print.innerHTML = '[ERRO] Preencha o campo idade corretamente!'
        return 
    }

    if(idade == ""){
         idade = 0
         window.alert(`Você não digitou sua idade, considerando sua idade = 0`)
    }


    print.innerHTML = `Acabei de conhecer ${nome}, que tem ${idade} anos de idade.`
}

btn.addEventListener('click', function () {
    dados()
})