
let numeros = []
let soma = 0

function limpatela() {
    let res1 = document.querySelector('div#res1')
    res1.innerHTML = ""
    
}

function adicionar() {
    let num = document.querySelector('input#txtnum')
    let n = Number(num.value)
    let res1 = document.querySelector('div#res1')

    numeros.push(n)

    res1.innerHTML = `${numeros.join(" , ")}`

    soma += n


}

function resultado() {

    limpatela()

    var maior = Math.max(...numeros)
    var menor = Math.min(...numeros)


    let res2 = document.querySelector('div#res2')
    res2.innerHTML = `<p>Conjunto: (${numeros.join(" , ")})</p>`
    res2.innerHTML += `<p>Foram adicionados ${numeros.length} números</p>`
    res2.innerHTML += `<p>Maior número: ${maior}, menor número: ${menor}</p>`
    res2.innerHTML += `<p>A soma total é: ${soma}</p>`
    res2.innerHTML += `<p>A média é de: ${soma / numeros.length}</p>`
}