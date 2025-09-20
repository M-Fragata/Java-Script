
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {

    var num = document.querySelector('input#txtnum')
    var n1 = Number(num.value)

    if (isNumero(n1) && !inLista(n1, valores)) {
        valores.push(n1)
        let item = document.createElement('option')
        item.text = `Valor ${n1} adicionado`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0)
        window.alert('Adicione valores antes de finalizar!')
    else {
        let tot = valores.length    
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    }
}