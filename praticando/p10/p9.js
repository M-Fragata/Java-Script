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
