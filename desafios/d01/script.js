var btn1 = window.document.querySelector('input#btn1')
var btn2 = window.document.querySelector('input#btn2')
var btn3 = window.document.querySelector('input#btn3')
var print = window.document.querySelector(`div#print`)

btn1.addEventListener('click', function (){
// window.alert(`Voce clicou no ${btn1.value}`)
print.innerHTML = `Voce clicou no ${btn1.value}`
})

btn2.addEventListener('click', function (){
// window.alert(`Voce clicou no ${btn2.value}`)
print.innerHTML = `Voce clicou no ${btn2.value}`
})

btn3.addEventListener('click', function (){
// window.alert(`Voce clicou no ${btn3.value}`)
print.innerHTML = `Voce clicou no ${btn3.value}`
})
