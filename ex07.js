/*
Faça um script que leia duas notas de um aluno, 
calcule e escreva a média final deste aluno. 
Considerar que a média é ponderada e que o peso das notas é 4 e 6

*/

var prompt = require("prompt-sync")();

var nota1 = Number(prompt("Qual é sua primeira nota?"));
var nota2 = Number(prompt("Qual é sua segunda nota?"));
var media1 = nota1 * 4
var media2 = nota2 * 6
var media = (media1 + media2) / 10



console.log(`Valor do primeiro semestre é ${media1}, do segundo ${media2} e no final é ${media}`);
