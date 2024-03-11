var prompt = require('prompt-sync')();

var numero1  = Number(prompt("Qual é o primeiro número")) 
var numero2  = Number(prompt("Qual é o segundo número")) 

var numFinal = (numero1 + numero2) * numero1

console.log(`Número final é ${numFinal}`)


