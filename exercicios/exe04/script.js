function gerar(){
    let num = window.document.querySelector('input#txtN')
    let tab = window.document.querySelector('select#selTab')

    if( num.value.length == 0){
    window.alert(`Por favor, digite um número!`)
    }else{
        let n = Number(num.value)
        tab.innerHTML = ``
        for(let contador = 1; contador <= 10; contador++){
            let item = document.createElement('option')
            
            item.text = `${n} x ${contador} = ${n * contador}` //text é parte de dentro do option
            item.value = `tab${contador}`
            tab.appendChild(item) //adicionar elemento filho que vai ser sempre no final item
        }

    }
    
}