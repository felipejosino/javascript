function contar(){
    let inicio = window.document.getElementById('txtI')
    let fim = window.document.getElementById('txtF')
    let passo = window.document.getElementById('txtP')

    let resultado = window.document.getElementById('resultado')

    // resultado.innerHTML = `${inicio.value.length} - ${fim.value.length} - ${passo.value.length}`

    if( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert(`[ERRO] Faltam dados !`)
        resultado.innerHTML = `Impossível contar !`
    }else{
        resultado.innerHTML = `<strong>Contando: </strong> <br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if( p <= 0){
            window.alert(`Intervalo de Passos inválido. Considerando PASSO sendo 1`)
            p = 1
        }

        if(i <= f ){
            // Contagem Propgressiva
            while(i <= f){
                resultado.innerHTML += ` ${i} \u{1F449}`
                i += p
            }
        }else{
            // Contagem Regressiva
            while(i >= f){
                resultado.innerHTML += ` ${i} \u{1F449}`
                i -= p
            }
        }    
        resultado.innerHTML += `\u{1F3C1}`  
            

    }
}