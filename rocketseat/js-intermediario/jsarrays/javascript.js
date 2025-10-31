//Aula 1 - O método map() chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array coim base nos retornos de cada chamada. E no final, devolve o novo array.
/*

const products = ["Teclado", "Mouse", "Monitor"]

//Percorrendo os itens do Array
products.map((product) => {
    console.log(product)
})

//Sintaxe reduzida
products.map((product) => console.log(product))

//Utilizando o novo objeto retornado.
const formatted = products.map((product) => {
    //return product.toUpperCase()
    return {
        id: Math.random().toFixed(4),
        description: product,
    }
})
console.log(...formatted)
*/

//Aula 2 - O método filter() cria um novo array com todos os elementos que passaram na condição
/*

const frontEnds = ["JavaScript", "HTML5", "CSS3", "React", "TailWind"]

const result = frontEnds.filter((frontEnd) => frontEnd.length > 5)
console.log(result)

const products = [
    {
    Tecnologia: "JavaScript",
    time: 3,
    learned: true,
    },

    {
    Tecnologia: "HTML5",
    time: 2,
    learned: true,
    },

    {
    Tecnologia: "CSS3",
    time: 3,
    learned: true,
    },

    {
    Tecnologia: "React",
    time: 4,
    learned: false,
    },

    {
    Tecnologia: "TailWind",
    time: 4,
    learned: false,
    },

]

//Exemplo de filtro de tecnologias já aprendidas.
const learned = products.filter((product) => product.learned === true)

console.log(learned)
*/

//Aula 3 - O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a condição. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.
/*

const values = [ 1, 3, 5, 7, 9]

//Retorna o primeiro índice que satisfaz a condição
const index = values.findIndex( (value) => value > 4)
console.log(index)
console.log(values[index])
*/

//Aula 4 - O método find() retorna o valor do primeiro elemento do array que satisfizer a condição. Caso contrário, undefined é retornado.
/*
//

const values = [5, 12, 8, 130, 44]

//Retorna o primeiro elemento que valor é maior que 10.
const found = values.find( (values) => values > 10)
console.log(found)

//Exemplo com objetos.
const fruits = [
    { name: "apples", quantity: 23 },
    { name: "bananas", quantity: 52 },
    { name: "orangess", quantity: 25 },
]

const result = fruits.find((fruits) => fruits.quantity > 24)
console.log(result)
*/

//Aula 5 - O método every() testa se todos os elementos do array passam na condição e retorna um valor boolean
/*
//Exemplo de array de idades

const ages = [ 17, 24, 30, 21, 40]
const verificacao = ages.every((age) => age >= 18)
console.log(verificacao) //Retorna falso pois nem todos os elementos satisfazem a condição
*/

//Aula 6 - O método some() testa se ao menos um dos elementos no array passa na condição e retorna um valor true ou false.
/*
//Exemplo de array de idades
const ages = [18, 20, 25, 30, 35, 40]

const result = ages.some( (age) => age < 18 )
console.log(result) //Retorna que ao menos um elemento satisfaz a condição.
*/

/*Aula 7 - O método reduce() é utilizado para reduzir um array a um único valor
    Parâmetros:
    - Array original (values)
    - Acumulador (acumulator)
    - Valor de iteração (currentValue)
    - Valor Inicial (0)
    - Index (index da iteração atual - opcional)
*/
/*
const values = [1, 2, 3, 4, 5]

const sum = values.reduce((accumulator, currentValue, index) => {

    console.log("Accumulator:", accumulator)
    console.log("currentValue:", currentValue)
    console.log("INDEX:", index)

    console.log("Soma", accumulator + currentValue)

    console.log("----------------------")

    return accumulator + currentValue
}, 0)
console.log("Resultado final da soma:",sum)
*/
