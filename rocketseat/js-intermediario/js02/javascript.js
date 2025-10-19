const user = {
    name: "Matheus",
    message: function() {
        //console.log(`Olá, ${user.name}!`)
        console.log(`Olá, ${this.name}!`)
    }
}
//Utilizando o this para acessar não funciona com arrow functions

const product = {
    name: "Teclado",
    quantity: 100,
}
//Acessando a propriedade do objeto
console.log(product.name)
console.log(product.quantity)
//Atualizando o valor de uma propriedade
product.name = "mouse"
product.quantity = 90
console.log(product.quantity)
console.log(product.name)
console.log(product)