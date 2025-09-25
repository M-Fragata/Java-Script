let res = document.querySelector('div#res')
let arranjo = []


function calcular() {
    const num1 = document.querySelector('input#num1')
    const numero1 = Number(num1.value)
    
    arranjo.push(numero1)
    
    let resposta = somaArray(numero1)

    res.innerHTML = `Array: [${arranjo.join(" , ")}] <br> Números pares: ${resposta}`
}


function somaArray(a){
    let soma = 0

    for (let c = 0; c < arranjo.length; c++){
        if (arranjo[c] % 2 ===0 ){
              soma++
        }
    }
    return soma
}