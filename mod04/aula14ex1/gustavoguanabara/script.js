function contar() {
    var inicio = document.querySelector('input#txti')
    var fim = document.querySelector('input#txtf')
    var passo = document.querySelector('input#txtp')

    var res = document.querySelector('div#res')

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    
    if (i == 0 || f == 0 || p == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando...'
    }


    if (i < f) {
        for (var c = i ; c <= f ; c += p ) {
            res.innerHTML += `${c}👉 `
        }
        res.innerHTML += `✅`
    } else if (i > f) {
        for (var c = i ; c >= f ; c -= p ) {
            res.innerHTML += `${c}👉 `
        }
        res.innerHTML += `✅`
    }
    
}