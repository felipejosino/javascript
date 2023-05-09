var btn = window.document.querySelector(`input#btn`)
var print = window.document.querySelector(`div#print`)

function verificarNota(){

    window.alert(`Desafio em manutenção, voltaremos em breve...`)

    // let aluno = window.prompt(`Qual é o nome do aluno ?`)
    
    // if(!aluno){
    //     window.alert(`Informe o nome do aluno para iniciar verificarção notas`)
    //     return
    // }

    // let n1 = parseFloat(window.prompt(`Primeira nota de ${aluno} :`))
    // let n2 =parseFloat(window.prompt(`Segunda nota de ${aluno} :`))

    // let media = (n1 + n2) / 2


    // if(media < 3){
    //     print.innerHTML = 
    //     `
    //     <h2>Situação de ${aluno} é ...</h2>
    //     <br>
    //     <p>Com as notas ${n1} e ${n2}, a <strong>média é ${media.toFixed(1)}</strong> </p>
    //     <br>
    //     <p>Com média abaixo de 3,0, o aluno está <mark id="vermelho" >REPROVADO</mark></p>
    //     `
    //     console.log(`Reprovado, Media: ${media}`)
    //     return
    // }

    // if(media >= 3 && media <= 6 ){
    //     print.innerHTML = 
    //     `
    //     <h2>Situação de ${aluno} é ...</h2>
    //     <br>
    //     <p>Com as notas ${n1} e ${n2}, a <strong>média é ${media.toFixed(1)}</strong> </p>
    //     <br>
    //     <p>Com média entre 3,0 e 6,0, o aluno está <mark id="amarelo" >RECUPERAÇÃO</mark></p>
    //     `
    //     console.log(`Recuperação, Media: ${media.toFixed(1)}`)
    //     return
    // }

    //     print.innerHTML = 
    //     `
    //     <h2>Situação de ${aluno} é ...</h2>
    //     <br>
    //     <p>Com as notas ${n1} e ${n2}, a <strong>média é ${media.toFixed(2)}</strong> </p>
    //     <br>
    //     <p>Com média acima 6,0 , o aluno está <mark id="verde" >APROVADO</mark></p>
    //     `
    //     console.log(`Aprovado, Media: ${media.toFixed(1)}`)
}

btn.addEventListener('click', function(){
    verificarNota()
})

