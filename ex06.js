/*
Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo 
por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas 
por ele efetuadas. Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, 
o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.

*/

var prompt = require("prompt-sync")();

var salario = Number(prompt("Qual é o seu salario?"));
var ValorTotalVendas = parseInt(prompt("Qual é a quantidade de carros que você vendeu? "));
var comissao = ValorTotalVendas * 0.05
var valorFinal = salario + comissao

console.log(`Valor final é: ${valorFinal}`);
