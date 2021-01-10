// Function - input (argument), code, output (return value)

// Challenge 
// convertFahrenheitTocelsius
// Call a couple of times (32 -> 0) (68 -> 20)
// Print the converted values

let convertFahrenheitTocelsius = function (fahrenheit) {  // fahrenheit is a reference argument 
    let celsius = (fahrenheit-32) * 5 / 9
    return celsius
}

let tempOne = convertFahrenheitTocelsius(32)  // 32 is an argument or if it was a variable, 
let tempTwo = convertFahrenheitTocelsius(68)  // it would be defined/declared, for ex, 'let number = 32' 
                                              // then we pass this argument as fahrenheit (a reference argument)
console.log(tempOne)                          // to the convert function for temp calculation
console.log(tempTwo)