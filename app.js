const sum = (a, b) => {
    return a + b
}

console.log(sum(7, 3));

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Funciones de conversión
const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD
}
console.log(fromEuroToDollar(1));

const fromDollarToYen = (dollar) => {
    const rate = oneEuroIs.JPY / oneEuroIs.USD
    return dollar * rate
}
console.log(fromDollarToYen(1));

const fromYenToPound = (yen) => {
    const rate = oneEuroIs.GBP / oneEuroIs.JPY
    return yen * rate
}
console.log(fromYenToPound(1));

// Export de modulos
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };


