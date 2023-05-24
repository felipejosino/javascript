var btn = window.document.querySelector(`input#btn`)
var print = window.document.querySelector(`div#print`)

function verificarNota(){

    // window.alert(`Desafio em manutenção, voltaremos em breve...`)


     let inputNomeAluno = window.prompt(`Qual é o nome do aluno ?`)

     let regexLetra = new RegExp('[^a-zA-Z \u00c0-\u00FF]', 'gi')
     let regexNumero = new RegExp('^0-9')
    
    if(!inputNomeAluno){
        print.innerHTML = `Informe o nome do aluno para iniciar verificarção notas`
        console.log(`${inputNomeAluno}`)
        return
    }

    let aluno = inputNomeAluno.split(" ").filter( value => value != "").join(" ")

    function verificarNome(nome){
        return  nome == "" || regexLetra.test(nome)
    }

    if (verificarNome(aluno)){
        print.innerHTML = `<p>[ERRO] Preencha o campo nome corretamente!</p>`
        console.log(verificarNome(aluno))
        return
    }

    console.log(`Nome do Aluno: ${aluno}, Verificação: ${verificarNome(aluno)}`)
    

    let inputNota1 = window.prompt(`Primeira nota de ${aluno} :`)

    if( !inputNota1 ){
        print.innerHTML = `<p>Informe primeira nota e veja situação do aluno.</p>`
        console.log( inputNota1 )
        return
    }

    let nota1 =  parseFloat( inputNota1.replace(',' , '.') )

    function verificarNota(nota){
        let statusNotas = nota >= 0 && nota <= 10
        return !statusNotas
    }

    if (verificarNota(nota1)){
        print.innerHTML = `<p>[ERRO] Preencha primeira nota corretamente! Entre 0 e 10.</p>`
        console.log( `verificação de  nota ${nota1} - ${verificarNota(nota1)}`)
        return
    }

    function verificarNum(num){
        return regexNumero.test( parseFloat(num) ) || !isFinite(num)
    }
    
    if( verificarNum(nota1) ){
        print.innerHTML = `<p>[ERRO] Preencha primeira nota corretamente!</p>`
        console.log( verificarNum(nota1) )
        return
    } 

    print.innerHTML = `<p>Nota 1: ${nota1}, Verificação: ${verificarNum(nota1)}</p>`
    console.log(`Nota 1: ${nota1}, Verificação: ${verificarNum(nota1)}`)


    let inputNota2 = window.prompt(`Segunda nota de ${aluno} :`)

    if( !inputNota2 ){
        print.innerHTML = `<p>Informe segunda nota e veja situação do aluno.</p>`
        console.log( inputNota2 )
        return
    }

    let nota2 =  parseFloat( inputNota2.replace(',' , '.') )

    if (verificarNota(nota2)){
        print.innerHTML = `<p>[ERRO] Preencha segunda nota corretamente! Entre 0 e 10.</p>`
        console.log( `verificação de  nota ${nota2} - ${verificarNota(nota2)}`)
        return
    }

    function verificarNum(num){
        return regexNumero.test( parseFloat(num) ) || !isFinite(num)
    }
    
    if( verificarNum(nota2) ){
        print.innerHTML = `<p>[ERRO] Preencha segunda nota corretamente!</p>`
        console.log( verificarNum(nota2) )
        return
    } 

    console.log(`Nota 2: ${nota2}, Verificação: ${verificarNum(nota2)}`)

    let media = (nota1 + nota2) / 2

    console.log(`Media: ${media}`)

    if(media < 3){
        print.innerHTML = 
        `
        <h2>Situação de ${aluno} é ...</h2>
        <br>
        <p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${media.toFixed(1)}</strong> </p>
        <br>
        <p>Com média abaixo de 3,0, o aluno está <mark id="vermelho" >REPROVADO</mark></p>
        `
        console.log(`Reprovado, Media: ${media}`)
        return
    }

    if(media >= 3 && media <= 6 ){
        print.innerHTML = 
        `
        <h2>Situação de ${aluno} é ...</h2>
        <br>
        <p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${media.toFixed(1)}</strong> </p>
        <br>
        <p>Com média entre 3,0 e 6,0, o aluno está <mark id="amarelo" >RECUPERAÇÃO</mark></p>
        `
        console.log(`Recuperação, Media: ${media.toFixed(1)}`)
        return
    }

        print.innerHTML = 
        `
        <h2>Situação de ${aluno} é ...</h2>
        <br>
        <p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${media.toFixed(2)}</strong> </p>
        <br>
        <p>Com média acima 6,0 , o aluno está <mark id="verde" >APROVADO</mark></p>
        `
        console.log(`Aprovado, Media: ${media.toFixed(1)}`)
}

btn.addEventListener('click', function(){
    verificarNota()
})

