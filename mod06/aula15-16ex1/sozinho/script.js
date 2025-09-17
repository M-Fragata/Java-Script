
function adicionar() {
var num = document.querySelector('input#txtnum')
var n = Number(num.value)
var res = document.querySelector('div#res')

if (n < 1 || n > 100) {
    window.alert(`[ERRO] o valor ${n} já foi adicionado ou está fora do intervalo!`)
} else {
    var b = [n]
    res.innerHTML += `Valor ${n} adicionado ${b}<br>`
    
}
}

