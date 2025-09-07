
function carregar() {

    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('div#img img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#dad55eff'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#274B5B'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#0A0907'
        // boa noite
    }

}
