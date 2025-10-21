
const creditCard = "1234400289224928"
//console.log(creditCard.toString().length)

//Pega os 4 últimos digitos
const lastDigits = creditCard.slice(-4)
//console.log(lastDigits)

//Pega os 4 últimos digitos da const lastDigits e completa o início com a quantidade de caracteres na constante creditCard no caso 16-4=12
const maskedNumber = lastDigits.padStart(creditCard.length,"X")
//console.log(maskedNumber)

//O padEnd preenche a string no final
const number = "123"
//console.log(number.padEnd(10,"#"))

let text = "Estudar, Aprender, Praticar"


//Separando String
let separate = text.split(",") //.split separa o texto com parâmetro que desejar no caso foi a virgula e criou um array
console.log(separate.length) //3 arrays
separate.push(number) // inserindo no array
console.log(separate) // 4 arrays

//Unindo String
let joined = separate.join(" - ")
console.log(joined)


let message = "Estou estudando os fundamentos do Javascript"

//Obter a posição da palavra, caso não encontre retorna -1.
console.log(message.indexOf("Javascript"))

//Verifica se existe a palavra na String, true and false.
console.log(message.includes("estudando"))

//Passando o conteúdo da message para tudo maiúsculo e pesquisando em maiúsculo
console.log(message.toUpperCase().includes("JAVASCRIPT"))

