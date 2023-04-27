var btn = window.document.querySelector('input#btn')
var print = window.document.querySelector(`#print`)

function verificarNum(){
    let num = Number(window.prompt(`Digite numero inteiro qualquer`))
    
    let regexNum = new RegExp('[^-0-9]')
    
    let antecessor = num - 1
    let sucessor = num + 1

    if(regexNum.test(num)){
        print.innerHTML = `<p>[ERRO] Preencha o campo corretamente!</p>`
        return
    }

    print.innerHTML = `
        <p>[ Antecessor : ${antecessor} ]; </p><br>
        
        <p>(  Numero escolhido [ ${num} ]   ); </p><br>
        
        <p>[ Sucessor   :   ${sucessor} ]</p>
    `
}

btn.addEventListener('click', function () {
    verificarNum()
})
