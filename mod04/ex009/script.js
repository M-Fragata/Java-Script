function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    //var formano = Number(fano.value)
    var res = window.document.querySelector('div#res')

    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') //seria mesma coisa ir no html e fazer <img id='foto'>
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'imagens/criançamasc.jpg')
            } else if (idade > 10 && idade < 21) {
                //adolescente
                img.setAttribute('src', 'imagens/jovemmasc.jpg')
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade <= 10) {
                //criança
                img.src = 'imagens/criançafem.jpg'
            } else if (idade > 10 && idade < 21) {
                //adolescente
                img.src = 'imagens/jovemfem.jpg'
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.src = 'imagens/mulher.jpg'
            } else {
                //idoso
                img.src = 'imagens/idosa.jpg'
            }
        }
        res.style.textAlign = 'center' 
        res.innerHTML = (`Detectamos ${gênero} com ${idade} anos.`)
        res.appendChild(img)
    }
}
