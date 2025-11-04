// Aula 1
//setTimeout() executa uma função após um intervalo de tempo especificado.
/*
setTimeout(() => {
    console.log("Hello world")
},1000)
*/

// Aula 2
//setInterval() executa uma função após um intervalo de tempo específicado.
/*
let value = 10

const interval = setInterval(() => {
    console.log(value)
    value -= 1

    if(value === 0) {
        console.log("Feliz ano novo!!")

        //Interrompe o intervalo de execução.
        clearInterval(interval)
    }
}, 1000);
*/

//Aula 3
// Funções assincronas

/*
//Função que retorna uma Promise
function asyncFunction() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            //Simula uma operação assincrona.
            const isSuccess = true

            if (isSuccess) {
                resolve("A operação foi concluída com sucesso!")
            } else {
                reject("Não foi possível concluir a operação!")
            }
        }, 3000)
    })
}

//Vizualizando que o retorno é uma promise.
//console.log(asyncFunction())



asyncFunction()
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log("Fim da execução!")
    })
*/

//Aula 4

/*
//Função que retorna uma Promise
function asyncFunction() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            //Simula uma operação assincrona.
            const isSuccess = false

            if (isSuccess) {
                resolve("A operação foi concluída com sucesso!")
            } else {
                reject("Não foi possível concluir a operação!")
            }
        }, 3000)
    })
}


    //const fetch = async () => {const response = await asyncFunction(console.log(response)}

async function fetch() {
    try {
        const response = await asyncFunction()
        console.log("Sucesso:", response)
    } catch (err) {
        console.log("Erro", err)
    } finally {
        console.log("Operação encerrada!")
    }
}

fetch()
*/

//Aula 5

// (1) Executa o código de forma síncrona e o valor 1 é impresso imediatamento no console.
console.log(1)

//Microtask são executadas antes de temporizadores e promises.
queueMicrotask(() => {
    console.log(2)
})

setTimeout(() => {
    console.log(3)
},1000)

// (2) Executa o código de forma síncrona e o valor 4 é impresso imediatamento no console.
console.log(4)

Promise.resolve(true).then(() => {
    console.log(5)
})