/* 
function expect(val) {

    let obj = {
        toBe: function(value){
            if(val === value){
                return true
            } else {
                throw new Error ("Not Equal")
            }
        },
        notToBe: function(value){
            if(val !== value){
                return true
            } else {
               throw new Error ("Equal")
            }
        },
    }

    return obj

}
*/
/*
const arr = [-1,0,1]

function plusOne(n) { return n + 1 }



const map = (arr, fn) => {

        const newArray = []

    for (let i = 0; i < arr.length ; i++) {

        if(fn(arr[i],i)) {
            newArray.push(fn(arr[i],i))
        }
        //newArray.push(fn(arr[i]))
    }
    console.log(newArray)
}

map(arr, plusOne)
*/
/*
const funcoes = [x => x + 1, x => x * x, x => 2 * x]

        
    const calc = [...funcoes]
    let obj = {
        f2: calc[0],
        f1: calc[1],
        f0: calc[2],
    }

    console.log(calc.length)





console.log(typeof(obj.f2))

const { f2, f1, f0 } = obj

console.log(f2(f1(f0(4))))



let xis = 4

const compose = (funcoes) => {

   const functios = (x) => {

    }
    return functios
}

const funcoess = (x) => {
    const calc = [...funcoes]
    const first = calc[1]
    return first(4)
}

console.log("----------")
        function testando(x){

            const funcoes = [x => x + 1, x => x * x, x => 2 * x]
            const calc = [...funcoes]

            let contador = x

            for(let i = (calc.length -1 ); i >= 0; i--) {
            contador = calc[i](contador)
            }
            
        }            
    testando(4)
    */



