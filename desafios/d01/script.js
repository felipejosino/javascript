var btn1 = window.document.querySelector('input#btn1')
var btn2 = window.document.querySelector('input#btn2')
var btn3 = window.document.querySelector('input#btn3')
var print = window.document.querySelector(`div#print`)

btn1.addEventListener('click', function (){
// window.alert(`Voce clicou no ${btn1.value}`)
print.innerHTML = `<p>Voce clicou no ${btn1.value}</p>`
})

btn2.addEventListener('click', function (){
// window.alert(`Voce clicou no ${btn2.value}`)
print.innerHTML = `<p>Voce clicou no ${btn2.value}</p>`
})

btn3.addEventListener('click', function (){
// window.alert(`Voce clicou no ${btn3.value}`)
print.innerHTML = `<p>Voce clicou no ${btn3.value}</p>`
})
