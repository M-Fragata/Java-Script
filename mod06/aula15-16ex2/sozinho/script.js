var nomes = []
contador = 0

function adicionar () {
    var num = document.querySelector('input#txtnome')
    var nome = num.value.trim()
    var res = document.querySelector('div#res')

    nomes.push(nome)
    
    res.innerHTML += `${contador} - ${nomes[contador]}<br>`
    contador += 1
}