// Create function - take fahrenheit in - return object with all three
let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius:    (fahrenheit - 32) * (5 / 9),
        kelvin:     (fahrenheit + 459.67) * (5 / 9)
    } 
}

let temps = convertFahrenheit(32)
console.log(temps)

