/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos 
(aplicados ao custo de fábrica). Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor 
e o imposto, e calcular e escrever o custo final ao consumidor

    carroNovo = custoFabrica + porDistruibuidor + impostos 

*/

var prompt = require('prompt-sync')();

var custoFabrica  = Number(prompt("Qual é custo para fabricar o carro?")) 
var distribuidor  = Number(prompt("Qual é a porcentagem do distribuidor? (ex: 30, 40) ")) 
var impostos  = Number(prompt("Qual é a porcentagem de impostos? (ex: 30, 40) ")) 
var carroNovo  = custoFabrica * (( distribuidor + impostos) / 100) 
var valorFinal = custoFabrica + carroNovo


console.log(`Valor final do caroo é: ${valorFinal}`)

