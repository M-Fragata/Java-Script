/* 
    OPTIONAL CHAINING (?.) - encadeamento opcional se a propriedade ou função chamada é nullish (null or undefined), a expressão retorna undefined em vez de gerar um erro.

    Útil ao explorar o conteúdo de um objeto quando não existe garantia da existência de determinadas propriedades obrigatórias.
*/

const user = {
    id: 1,
    name: "Matheus",
    /*
    address: {
        street: "Rua 125",
        city: "Maricá",
        geo: {
            latitude: 47.8080,
            longitude: 17.5674,
        }
    },
     */
    message: () => {
        console.log(`Olá, ${user.name}!`)
    }
       
}
//Utilizando a interrogação não ocorre erro caso não encontre
console.log(user?.address?.street)

user.message?.()

/* 
    OPERADOR DE COALESCÊNCIA NULA (??)
    Operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou indefined. Caso contrário, ele retorna o seu operando do lado esquerdo.
*/

let content = null
console.log(content ?? "Conteúdo padrão")// content null/undefined então mostra o texto a direita

content = "Olha o capa!"
console.log(content ?? "Conteúdo padrão") //content !null/!undefined mostra conteudo de content a esquerda

const usuario = {
    name: "Matheus",
    avatar: undefined, //undefined ou null
}

console.log(usuario.avatar ?? "Default.png")