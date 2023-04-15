let btnAdd = window.document.querySelector('input#btnAdd')
let btnFin = window.document.querySelector('input#btnFin')

let num = window.document.querySelector('input#fnum')
let lis = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#resultado')
let val = [] // vetor inicialmente vazio

function isNum(n){ // recebe valore que vem do primeiro if dentro btn.addEventListener
    if(Number(n) >= 1 && Number(n) <= 100){
        return true // caso numero recebido for (maior ou igual 1) e (menor ou igual a 100) returna true
    }else{
        return false // retorna false
    }
}

function isLis(n, listVal){
    if(listVal.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

btnAdd.addEventListener('click', function(){
    
        if(isNum(num.value) && !isLis(num.value, val)){
            
            val.push(Number(num.value)) // adicionano valore no vetor

            let item = document.createElement('option') //criando option
            item.text = `Valor ${num.value} adicionado.` // text que vai no option
            lis.appendChild(item) //appendChild adiciona valor recebedo no option
            res.innerHTML = `` // Apos adicionar div resultado vai ser limpada

        }else{
            window.alert(`Valor inválido ou já encontrado na lista`)
        }

        num.value = `` // value // atributo vai receber vazio para limpar
        num.focus()    // adicionando foco na input
})

btnFin.addEventListener('click', function(){
    if( val.length == 0){
        window.alert(`Adicione valores antes de finalizar`)
    }else{
        let tot = val.length
        let maior = val[0] //posição inicial para analizar primeiro valor [ 0 ]
        let menor = val[0] 

        let soma = 0 // soma e media iniciam sendo 0
        let media = 0

        for(let pos in val){ //laço de percuso para percorrer o vetor inteiro
            
            soma += val[pos]

            if(val[pos] > maior) // valores na posição [pos] for ( > que o maior valor) maior 
            maior = val[pos] //deixa de ser o anterior e passa a ser esse

            if(val[pos] < menor)
            menor = val[pos]
        }
        
        media = soma /tot
        
        res.innerHTML = `<p>Ao todo, temo <strong>${tot}</strong> números cadastrados.</p>` 
        res.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>Somatoria dos valores foi <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores é <strong>${media}</strong></p>`


    }
})

