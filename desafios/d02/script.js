var btn = window.document.querySelector('input#btn')
var print = window.document.querySelector('div#print')

function dados(){
    let nome = window.prompt(`Qual é o seu nome?`)
    let idade  = window.prompt(`Quantos anos voce tem ? [Apenas numeros]`)

    // window.alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade`)
    print.innerHTML = `Acabei de conhecer ${nome}, que tem ${idade} anos de idade.`
}

btn.addEventListener('click', function () {
    dados()
})