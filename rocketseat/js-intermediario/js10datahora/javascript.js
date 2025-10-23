/*
//            aula 1
//Exibe data e hora atual
console.log(new Date())

//Exibe a data e hora de referencia (considera o fuso)
console.log(new Date(0))

//Exibe o numero de milissegundos
console.log(new Date().getTime())
*/
/*
//        Aula 2

console.log(new Date(2025, 9,23)) //ano, mês, dia. (mês começa no "0")

//Define data e hora.
console.log(new Date(2025,9,23,16,0,0))

//Definindo com string
console.log(new Date("2025-10-23T16:00:00"))
*/
/*
//         Aula 3

let date = new Date("2025-10-23T16:05:00")

// Dia da semana de 0 à 6 (domingo é "0")
console.log(date.getDay())

//Mês (0 à 11)
console.log(date.getMonth() + 1)

//Ano
console.log(date.getFullYear())

//Horas
console.log(date.getHours())

//Minutos
console.log(date.getMinutes())
*/
/*
//      Aula 4

let date = new Date("oct 23, 2025 16:14:00")

//Modificar o ano.
date.setFullYear(2001)

//Modificar o mês.
date.setMonth(1)

//Modificar o dia.
date.setDate(21)

console.log(date) // 21 de fevereiro de 2001
*/
/*
//              Aula 5

let date = new Date("2025-11-03T16:52:00")

//Formatando para o DIA ter sempre dois digitos
let day = date.getDate().toString().padStart(2, "0")
console.log(day)

//Formatando para o MÊS ter sempre dois digitos
let month = date.getMonth().toString().padStart(2, "0")
console.log(month)

let year = date.getFullYear()
let hour = date.getHours()
let minutes = date.getMinutes()

console.log(`${day}/${month}/${year} às ${hour}:${minutes}`)
*/
/*
//                 Aula 6

let date = new Date("2025-10-23T17:03:00")

//Retorna somente a data.
console.log(date.toDateString())
//Retorna data formatada com padrão local (dia/mes/ano)
console.log(date.toLocaleDateString())

//Retorna somente a hora
console.log(date.toTimeString())
//Retorna horário formatado com padrão local (hora:minuto:segundo)
console.log(date.toLocaleTimeString())

//Exibe data e hora no formato escolhido.
console.log(date.toLocaleDateString("en"))
console.log(date.toLocaleTimeString("en"))
*/
/*
//                   Aula 7

let date = new Date("2025-11-23T17:11:00")

//console.log(date.toLocaleString())
//console.log(date.toLocaleString("en"))

console.log(//23/11/2025, 17:11
    date.toLocaleString("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
})
)

console.log(//23 de novembro de 2025 às 17:11:00 BRT
    date.toLocaleString("pt-BR", {
        dateStyle: "long",
        timeStyle: "long",
})
)

console.log( //23 de nov. de 2025, 17:11:00
    date.toLocaleString("pt-BR", {
        dateStyle: "medium",
        timeStyle: "medium",
})
)

console.log( //domingo, 23 de novembro de 2025 às 17:11:00 Horário Padrão de Brasília
    date.toLocaleString("pt-BR", {
        dateStyle: "full",
        timeStyle: "full",
})
)

console.log(date.toLocaleString("pt-br", {
    day:"2-digit",
    month:"2-digit",
    year:"2-digit",
    hour:"2-digit",
    minute:"2-digit",
}))

let amount = 12.5

console.log(amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
}))
*/
/*
//                Aula 8
// Intl é a API de Internacionalização do ECMAScript


//Obtém informações da localidade.
const currentLocale = Intl.DateTimeFormat().resolvedOptions()

console.log(currentLocale)

//Exibe no formato de acordo com a localidade.
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))



const date = new Date()
//Diferença do timezone.
console.log(date.getTimezoneOffset())//em minutos
console.log(date.getTimezoneOffset() / 60)//em horas
*/

function atualizarHora() {

const res = document.querySelector('div#res')

let date = new Date().toLocaleString("pt-BR", {
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit",
    day:"2-digit",
    month:"2-digit",
    year:"numeric",
})

res.innerHTML = `${date}`
}

setInterval(atualizarHora,1000)

console.log("12".padStart(4,"0"))

