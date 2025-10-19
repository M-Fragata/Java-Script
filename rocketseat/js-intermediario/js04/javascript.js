
//Função construtora
function createProduct(name){
    const product = {}

    product.name = name
    product.details = () => {
        console.log(`O nome do produto é ${product.name}`)
    }

    return product
}

// O new cria um novo objeto utilizando a estrutura da função construtora.
const product1 = new createProduct("Teclado")
console.log(product1.name)
product1.details()

const product2 = new createProduct("Mouse")
console.log(product2.name)
product2.details()

//Exemplos de funções construtoras disponíveis no próprio Javascript

let myName = new String("Matheus")

let price = "40.6".replace("." , ",")
console.log(price)

let date = new Date().getFullYear()
console.log(date)


//Função construtora
function person(name) {
    this.name = name
    this.message = () => {
        console.log(`Olá, ${this.name}`)
    }
}

const person1 = new person("Matheus")
console.log(person1.name)
person1.message()