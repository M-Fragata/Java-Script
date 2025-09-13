function contagem() {

    var inicio = document.querySelector('input#txtinicio')
    var fim = document.querySelector('input#txtfim') 
    var passo = document.querySelector('input#txtpasso')
    var res = document.querySelector('div#res')

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
/*
    if (i == 0) {
        window.alert('[ERRO] Faltam dados no início!')
    } else if (f == 0) {
        window.alert('[ERRO] Faltam dados no fim!')
    } else {
        window.alert('[ERRO] Faltam dados no passo!')
    }
*/

    res.innerHTML = 'Contando: '
    
    if (i < f) {
        for (var c = i  ;c <= f ; c = c + p)
        res.innerHTML += `${c} 👉`
    } else {
        for (var c = i; c >= f ; c = c - p)
        res.innerHTML += `${c} 👉`
    }
        

}