
let btn = window.document.querySelector('input#btnVerificar')

btn.addEventListener('click', function(event){

    var data = new Date()
    var ano = data.getFullYear()
    var txtAano = document.querySelector('input#txtAno')
    var resultado = document.querySelector('div#resultado')

    if(txtAano.value.length == 0 || Number(txtAano.value) > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }else{
        var radSex = document.getElementsByName('radSex')
        var idade = ano - Number(txtAno.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(radSex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&w=1600')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src', 'https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=1600')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'https://images.pexels.com/photos/3214779/pexels-photo-3214779.jpeg?auto=compress&cs=tinysrgb&w=1600')
            }else{
                // idoso
                img.setAttribute('src', 'https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg?auto=compress&cs=tinysrgb&w=1600')
            }
        
        }else if(radSex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', ' https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&w=1600')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src', 'https://images.pexels.com/photos/672444/pexels-photo-672444.jpeg?auto=compress&cs=tinysrgb&w=1600')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1600')
            }else{
                // idoso
                img.setAttribute('src', 'https://images.pexels.com/photos/3779770/pexels-photo-3779770.jpeg?auto=compress&cs=tinysrgb&w=1600')
            }

        }
        resultado.style.textAlign = 'center' // centralizar usando JS
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resultado.appendChild(img) // Vai adicionar elemento abaixo result.innerHTML acima 
    }

})  
