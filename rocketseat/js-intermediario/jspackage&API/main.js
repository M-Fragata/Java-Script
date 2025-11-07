/*
//Utilizando fetch com then

fetch("http://localhost:3333/products")
.then((response) => {response.json()
.then((result) => {console.log(result)})
})
*/

// Utilizando fetch com async/await
async function fetchProducts(params) {
    const response = await fetch("http://localhost:3333/products")
    const result = await response.json()
    console.log(result)
}

async function fetchProductById(id) {
    const response = await fetch(`http://localhost:3333/products/${id}`)
    const result = await response.json()
    console.log(result)
}

//fetchProductById(1762476406066)

//fetchProducts()

const productName = document.querySelector('input#name')
const productPrice = document.querySelector('input#price')
const form = document.querySelector('form')

addEventListener('submit', async (event) => {
    event.preventDefault()
    console.log("Enviando...")

    await fetch("http://localhost:3333/products", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            name: productName.value,
            price: productPrice.value
        })      
    })

    await fetchProducts()
})
