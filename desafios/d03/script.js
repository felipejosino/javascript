var btn = window.document.querySelector('input#btn')
var print = window.document.querySelector(`#print`)

function verificarNum(){
    let num = Number(window.prompt(`Digite numero inteiro qualquer`))
    
    let regexNum = new RegExp('[^-0-9]')
    
    let antecessor = num - 1
    let sucessor = num + 1

    if(regexNum.test(num)){
        print.innerHTML = `[ERRO] Preencha o campo corretamente!`
        return
    }

    print.innerHTML = `

    [ Antecessor : ${antecessor} ]; <br><br>
    
    (  Numero escolhido [ ${num} ]   ); <br><br>
    
    [ Sucessor   :   ${sucessor} ]

    `
}

btn.addEventListener('click', function () {
    verificarNum()
})
