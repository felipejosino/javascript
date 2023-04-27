var btn = window.document.querySelector('input#btn')
var print = window.document.querySelector('div#print')

function dados(){

    let usuario = window.prompt(`Qual é o seu nome?`)
    let idade  = window.prompt(`Quantos anos voce tem ? [Apenas numeros]`)
    
    let nome = usuario.split(" ").filter( value => value != "").join(" ")

    let regexLetra = new RegExp('[^a-zA-Z \u00C0-\u00FF]','gi')
    let regexNumero = new RegExp('[^0-9]')

    if(nome == "" || nome == null || regexLetra.test(nome)){
        print.innerHTML = '<p>[ERRO] Preencha o campo nome corretamente!</p>'
        return
    }

    if(regexNumero.test(idade) || !isFinite(idade)){
        print.innerHTML = '<p>[ERRO] Preencha o campo idade corretamente!</p>'
        return 
    }

    if(idade == ""){
         idade = 1
         window.alert(`Você não digitou sua idade, considerando que possui 1 ano.`)
    }


    print.innerHTML = 
    `
        <p>Acabei de conhecer ${nome} de ${idade} anos de idade.</p>
    `
}

btn.addEventListener('click', function () {
    dados()
})