let message = "Estou estudando os fundamentos do Javascript."

console.log(message) //Exibindo normal
console.log(message.toUpperCase()) //Exibindo em maiúsculo
console.log(message.toLowerCase()) //Exibindo em minúsculo

console.log(message.length) //Comprimento de uma string. obs: conta com os espaços

let value = 12345
//convertendo numero para texto e descobrindo comprimento
console.log(String(value).length)
console.log(value.toString().length)

//Substituir parte de um texto.
let replace = "substituindo. ponto. por. virgula."
console.log(replace.replaceAll("." , ","))//Primeiro parâmetro é o que quer encontrar no texto e o segundo parâmetro é para substituir o primeiro.

//Extraindo uma parte da string (start, end)
console.log(message.slice(0, 15))//de onde até onde para retirar do texto

//Extraindo uma parte da string de trás para frente
console.log(message.slice(-11))

//Remover espaços em branco no início e final da string
let textWithSpace = "      Texto de exemplo       "
console.log(textWithSpace.length)
console.log(textWithSpace.trim())