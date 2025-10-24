/*
                    Aula 1
class Person {
    constructor(name) {
        console.log(`Olá, ${name}`)
    }
}

const person = new Person("José")
*/
/*
//                  Aula 2

class Product {
    constructor(name,descricao) {
        this.name = name
    }
}

const product1 = new Product("Teclado")

console.log(product1.name)

const product2 = new Product("Mouse")
console.log(product2.name)
*/
/*
//                  Aula 3

class User {
    constructor(name, email){
        this.name = name
        this.email = email
    }

    sendEmail(){
        console.log(`E-mail enviado para ${this.name}, para o endereço eletrônico: ${this.email}`)
    }
}

const user1 = new User("Matheus", "matheusdemoraes2@gmail.com")
console.log(user1.sendEmail())

const user2 = new User("Danieli", "danielivenancio@gmail.com")
console.log(user2.sendEmail())
*/
/*
//                    Aula 4

class User{
   static showMessage(message) { //Utilizando o static antes posso utilizar sem estanciar a classe
        console.log(message)
    }
}

User.showMessage("Essa é uma mensagem")
*/
/*
//                Aula 5

class Animal{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    makeNoise(message,age) {
        console.log(`${message}`)
    }
}
//--------
class Dog extends Animal{
}
const dog = new Dog("Pretinha", "6 anos")
console.log(dog.name)
console.log(dog.age)
dog.makeNoise("Au-Au")
//--------
class Cat extends Animal{
}
const cat = new Cat("Charlotte", "3 anos")
console.log(cat.name)
console.log(cat.age)
cat.makeNoise("Miau-miau")
*/
/*
//                  Aula 6 Prototype

const address = {
    city: "Rio de Janeiro",
    country: "Brazil",
}

console.log(address)

const users = ["Rodrigo", "João", "Maria"]
*/
/*
//                Aula 7

let obj = [17]
let index = 300

try{
    
    if(!obj.includes(17)){
        throw new TypeError("O número 17 não está disponível")
    }

    if (index > 99){
        throw new RangeError("O número está fora do intervalo.")
    }

} catch (error){
    if(error instanceof TypeError) {
        console.log("Método indisponível")
    } else if (error instanceof RangeError){
        console.log(error.message)
    } else {
        console.log("Não foi possível realizar a ação")
    }
} 
*/

//                         Aula 8 erro personalizado

class MyCustomError {
    constructor(message) {
        this.message = "Classe de erro customizada: " + message
    }
}

try {
    throw new MyCustomError("Erro personalizado lançado!")
} catch (error) {
    if(error instanceof MyCustomError){
        console.log(error.message)
    } else {
        console.log("Não foi possível executar!")
    }
}