/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem 
do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual 
do distribuidor seja de 28% e os impostos de 45%, escrever um script para ler o custo de 
fábrica de um carro, calcular e escrever o custo final ao consumidor. 

    carroNovo =  custoFabrica = distruibuidor 28% + impostos  45%

*/

var prompt = require('prompt-sync')();

var custoFabrica  = Number(prompt("Qual é custo para fabricar o carro?")) 
var carroNovo  = custoFabrica * ( 0.28 + 0.45)
var valorFinal = custoFabrica + carroNovo


console.log(`Valor final do caroo é: ${valorFinal}`)

