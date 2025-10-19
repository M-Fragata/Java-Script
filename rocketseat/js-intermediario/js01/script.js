
const obj = {
    "carro": "hb20",
    "ano": 2015,
}

//Objeto com propriedades e métodos(funções)
const user = {
    email: "matheusdemoraes2@gmail.com",
    age: 23,
    name: {
        first_name: "Matheus",
        surname: "Gonçalves",
    },
    addres: {
        street: "Rua X",
        number: 23,
        city: "São Paulo",
        postal_code: "12345-123",
    },
    message: () => {
        console.log("Hello, World!")
    },
}

//Acessando propriedades

// Notação de ponto
console.log(user.name.first_name)

//Executa o método(função) do objeto
user.message()

//Notação de colchetes
console.log(user["email"])