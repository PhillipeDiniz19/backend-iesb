var prompt = require('prompt-sync')();

var salario  = Number(prompt("Qual é o seu salário?")) 
var percentual  = Number(prompt("Qual é o percentual de reajuste?")) 

function calcularPercentual(valor) {
    return (valor / 100) * percentual;
}

const percentualFinal = calcularPercentual(salario)
const salarioFinal = salario + percentualFinal

console.log(`Seu salário reajustado é: ${salarioFinal}`)

