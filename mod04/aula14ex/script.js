function contagem() {

    var inicio = document.querySelector('div#txtinicio')
    var fim = document.querySelector('div#txtfim') 
    var passo = document.querySelector('txtpasso')
    var res = document.querySelector('div#res')
    
    if (inicio < fim) {
        for (var c = inicio  ;c <= fim ; c = c + passo)
        res.innerHTML = `${c}`
    } else {
        for (var c = inicio; c >= fim ; c = c - passo)
        res.innerHTML = `${c}`
    }
        

}