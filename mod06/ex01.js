let num = [5, 8, 2, 9, 3]

num.sort()

console.log(num)

var n = num.indexOf(5)
console.log(n)

/*
for (var rep = 0 ; rep < num.length ; rep += 1) {
    console.log(`A posição ${rep} tem o valor ${num[rep]}`)
}
*/
for (var rep in num) {
    console.log(`A posição ${rep} tem o valor ${num[rep]}`)
}

