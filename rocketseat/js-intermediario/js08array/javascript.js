
let fruits = ["Apple", "Watermelon", "Strawberry"]
//console.log(fruits)

fruits.unshift("Banana")

//Encontra e retorna o índice do elemento no Array.
let position = fruits.indexOf("Watermelon")
console.log(position)


//deletar mais de um item no Array
//fruits.splice(1, 2) //Deletou os índices de 1 até 3
console.log(fruits)
fruits.splice(position, 1)// Remove do array o item procurado pelo indexOF
console.log(fruits)


//Verificar se um item existe no Array. True se encontrar False se não encontrar
fruits.splice
console.log(fruits.includes("Apple"))


let myArray = [
    "um texto", //String
    10, //Number
    true, //Bolean
    function() { //Function
        console.log("função dentro do Array")
    },
    { //Object
        name: "Matheus",
        email: "matheusdemoraes2@gmail.com",
        idade: () => {
            console.log("Possui 24 anos")
        },
    }
]
console.log(myArray)
console.log(myArray[0]) // Texto
console.log(myArray[1]) // Número
console.log(myArray[2]) // Boleano
myArray[3]()            // Função    
console.log(myArray[4]) // Objeto       
console.log(myArray[4].name)
myArray[4].idade()      //Função dentro do objeto  


const array = [1,2,3,4,5]
array.splice(3,1,'x','y','z')
console.log (array)