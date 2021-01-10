let num = 103.941

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

//challenge
//1-5 - true if correct - false if not correct

let makeGuess = function (guessNum) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randomNum)
    return guessNum === randomNum
}
console.log(makeGuess(1))