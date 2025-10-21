// WHILE: executa até que a condição seja VERDADEIRA
/*
let execute = true

while (execute) {
    let response = window.prompt("Deseja continuar: 1 (SIM) 2 (NÃO)") 

    if (response === "2") {
        console.log("Parou")
        execute = false

    } else if (response === "1"){
        console.log("Continuando...")
        execute = true
    } else {
        console.log("Usu digitou valor inválido")
        alert("Digite apenas 1 (SIM) 2 (NÃO)")
    }
}
*/

//Loop infinito
/*
let value = true

while (value) {
    console.log("Executando loop infinito")
}
*/

//DO WHILE: repete até que a condição especificada seja VERDADEIRA. No entanto, a instrução será executada pelo menos umas vez ated da condição ser verificada.

/*
let value = 0

do {
    value++
    console.log(value)
} while (value < 10)

console.log("Segue o fluxo!")
*/

//FOR: Repete até que a condição especificada seja FALSA.
// Variável de controle
// Condição
// Incremento ou decremento da variável de controle

/*

for (let contador = 0; contador <= 10; contador++) {
    console.log(contador)
}
*/


//Tabuada do número desejado pelo usuário até onde desejar
/*
const usuario = window.prompt("Digite o valor")
const ate = window.prompt("Digite até quanto")

console.log(usuario)

for (let i = 0; i <= ate; i++) {
    const resultado = usuario * i
    console.log(`${usuario} x ${i} = ${resultado}`)
}
*/

// for...in executa iterações a partir de um objeto e percorre as propriedades
/*
let person = {
    name: "Matheus",
    surname: "Fragata",
    email: "matheusdemoraes2@gmail.com",
}

//Percorrendo as propriedades a partir do objeto
for (let property in person) {
    //Exibe o nome da propriedade
    console.log(property)
    //Exibe o conteúdo da propriedade
    console.log(person[property])
}


let students = ["Rodrigo", "João", "Amanda"]

for (let index in students) {
    console.log(students[index])
}
*/

/*
//for...of itera sobre valores de um objeto iterável
let students = ["Rodrigo", "João", "Amanda"]

for (let student of students) {
    console.log(student)
}
*/

/*
//Utilizando o break para finalizar a repetição.

for (let i = 0; i < 10; i++) {

    if (i === 5) {
        break
    }

    console.log(i)
}
    */

//Continue encerra (pula) a execução das instruções na iteração atual e continua a execução do loop com a próxima iteração.

for (let i = 0; i < 10; i++) {

    if (i === 5) {
        continue // do continue ele foi direto para o for sem passar no console.log e não apareceu o 5.
    }

    console.log(i)
}