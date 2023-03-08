function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora > 0 && hora < 12) {
        //Bom dia
        img.src = 'manha.png'
        document.body.style.background = 'rgb(236,218,173)'
    }else if(hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = 'rgb(220,133,78)'
    }else{
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = 'rgb(16,22,64)'
    }
}