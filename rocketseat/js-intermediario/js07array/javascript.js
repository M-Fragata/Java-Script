
const newArray = new Array()
console.log(newArray)
console.log(newArray.length)


//cria array com 10 posições vazias
const available = new Array(10)
console.log(available)
console.log(available.length)

const fruits = new Array('Apple', 'Banana', 'Orange')
console.log(fruits)
//Adicionando item no final do array usando .push
fruits.push('Abacaxi')
//Adicionando item no início do array usando unshift
fruits.unshift('Watermellow')
console.log(fruits)
//Último item do array
console.log(fruits[fruits.length - 1])
//Primeiro item do array [0]
console.log(fruits[(fruits.length - fruits.length)])


//Criando array com split
let fullName = "Matheus Fragata de Moraes"
console.log(fullName.split(" "))


let name = []

name.push("Matheus")
name.push("Fragata")
name.push("de")
name.push("Moraes")
console.log(name)

//.shift remove o primeiro item do Array
name.shift()
console.log(name)


//.pop remove o último item do Array
name.pop()
console.log(name)


