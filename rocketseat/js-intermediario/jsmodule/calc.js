/*
//export { sum, multiply }
//export {sum as sumTwoNumbers, multiply as multiplyTwoNumbers}


//Default export = é a função padrão fornecida pelo módulo.
export default function sum(a, b) {
    return a + b
}

//Named export - cada método é importado pelo seu próprio nome de exportação.
export function multiply (a, b) {
    return a * b
}
    */

export class Calc{
    name = "Matheus"
    
    sum(a, b) {
    return a + b
    }

    multiply (a, b) {
    return a * b
    }

}