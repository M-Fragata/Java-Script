/*
//O strict mode (modo estrito): ativando esse modo, os erros que eram silenciosos passam a gerar exceções no javascript.

"use strict"

function showMessage() {

    let personName = "Matheus Fragata"

    console.log("Olá", personName)
}

showMessage()

class Student {
    get point() {
        return 7
    }
}

let student = new Student()
// Tenta alterar uma propriedade somente leitura. 
//student.point = 10

//Quando parametros duplicados, o strict mode acusa erro
function sum(a, a, c) {
    return a + a + c
}
const result = sum(1 , 3 , 2) //3 + 3 + 2 = 8
*/

/*
//                     Aula 02
//Destructuring Assigment (Desestruturação) permite extrair dados de arrays ou objetos em variáves distintas

const data = [
    "Matheus Fragata",
    "matheusdemoraes2@gmail.com"
]

//Desestruturando array data

const [username, email] = data
console.log(username)
console.log(email)

const fruits = [
    "Banana",
    "Apple",
    "Orange",
]

//Desestruturando somente o primeiro no array fruits
const [banana] = fruits
console.log(banana)

//Ignorando o primeiro na desestruturação utilizar virgulas
const [,apple] = fruits
console.log(apple)
*/

/*
//                      Aula 3
//Destructuring objetos

const product = {
    description: "Teclado",
    price: 150,
}

const { description, price } = product
console.log(description)
console.log(price)

function newProduct({description, price}) {

console.log(description)
console.log(price)

}

newProduct({
    description: "Mouse",
    price: 70
})
*/
/*
//                  Aula 4
// Rest params (...) permite representar um número indefinido de argumentos como um array.

function values(...rest) {
    //Mostra a quantidade de parâmetros
    console.log(rest.length)

    // Mostrando o conteúdo do array
    console.log(...rest)

    //Mostra o conteúdo do rest que é um array
    console.log(rest)
}

values(1, 2, "c", 4)
*/

//                        Aula 5
//Spread (espalhar) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos.

const numbers = [1, 2, 3]
console.log(numbers)

//Spread
console.log(...numbers)


//Criando objeto
const data = [
    {
        name: "Matheus",
        email: "matheusdemoraes2@gmail.com",
        avatar: "r.png",
    },
    {
        name: "Danieli",
        email: "nielivenancio2@gmail.com",
        avatar: "d.png",
    }
]
//Utilizando o spread no array com objetos.
console.log(...data)