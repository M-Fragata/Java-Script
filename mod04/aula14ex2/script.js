function tabuada() {
    var tabuada = document.querySelector('input#txttabuada')
    var ate = document.querySelector('input#txtate')
    var t = Number(tabuada.value)
    var a = Number(ate.value)
    var res = document.querySelector('div#res')
    var m = 0
  
    res.innerHTML = ""

    for ( var c = 0 ; c <= a ; c = c + 1 ) {
        m = t * c
        res.innerHTML += `${t}x${c} = ${m} <br>`
    }
}