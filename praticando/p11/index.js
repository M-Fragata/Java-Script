
const adicionarItem = document.querySelector('#adicionarItem')
const res = document.querySelector('#res')

adicionarItem.addEventListener('click', () => {
    let item = document.querySelector('#item').value
    const data = document.querySelector('#data').value

    const date = new Date(data).toLocaleString('pt-BR', {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    })

    res.innerHTML += `<div class="styleItens"> <div>${item}</div> <div>${date}</div> <button onclick="this.parentNode.remove()"> <img src="./imagens/lixo.png" alt="lixeira"></button> </div>`

})


