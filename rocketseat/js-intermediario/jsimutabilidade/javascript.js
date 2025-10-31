//Aula 1 - Imutabilidade
/*
const address1 = {
    street: "Rua 125",
    quadra: 530,
    lote: 6,
}


//Trata-se de uma referência na memória ao address1 e NÃO um novo objeto.
const address2 = address1
//Fez a alteração nos dois address
address2.street = "Rua 128"
console.log(address1, address2)

//Trata-se de um novo objeto, podendo realizar alterações sem realizar mudanças no address1
const address3 = { ...address1 }
address3.street = "Rua 140"
console.log(address1, address3)
const address4 = {...address1, lote: 40, quadra: 525}
console.log(address1, address4)


//Exemplo referência de Array
const list1 = ["Apple", "Banana"]

const list2 = list1

list2.push("Wattermellow") // Adiciona nas duas listas.
console.log(list1, list2)

//Exemplo criando novo Array
const list3 = [ ...list1 ]

list3.push("Oranges") // Adiciona apenas na list3

console.log(list1, list3)
*/

// Aula 2 - Shallow Copy (Cópia superficial): não pega os itens aninhados.
/*
const htmlCourse = {
    course: "HTML",
    students: [{
        name: "Matheus", 
        email: "matheusdemoraes2@gmail.com"
    }]
}

const jsCourse = { ...htmlCourse, course: "JavaScript"}

//Vai modificar o htmlCourse também pois students é uma referência e não uma cópia.
jsCourse.students.push({name: "Danieli", email: "danielivenancio@gmail.com"})

console.log(htmlCourse, jsCourse)
*/
// Aula 2 - Deep Copy (Cópia profunda): 
/*
const htmlCourse = {
    course: "HTML",
    students: [{name: "Matheus", email: "matheusdemoraes2@gmail.com"}]
}

const jsCourse = { 
    ...htmlCourse, 
    course: "Javascript",
    students: [...htmlCourse.students, {name: "Danieli", email: "danielivenancio@gmail.com"}]
}

console.log(htmlCourse, jsCourse)

const fruits1 = {fruit: ["banana", "abacate", "pêra"]}

const fruits2 = {
    ...fruits1,
    fruit: [...fruits1.fruit],
}

fruits2.fruit.push("limão", "abacate")

console.log(fruits1, fruits2)
*/

//Aula 3 - Shallow Freezing
/*
const book = {
    title: "Harry Potter",
    category: "Magia",
    author: {
        name: "Fragata",
        email: "matheusdemoraes2@gmail.com"
    }
}

//O JavaScript em si não impõe restições à modificação dos objetos.
//book.category = "Fantasia"

// Congela o objeto e impede a modificação.
Object.freeze(book)

book.category = "Fantasia"

//O Object.freeze() não impede modificações profundas nos objetos aninhados (shallow freezing). 
book.author.name = "Matheus"

console.log(book)
*/
//Aula 4 - Deep Freezing

