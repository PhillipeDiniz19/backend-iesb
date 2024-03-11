var prompt = require('prompt-sync')();

var nota1 = Number(prompt("Qual é sua primeira nota?"))
var nota2 = Number(prompt("Qual é sua segunda nota?"))
var nota3 = Number(prompt("Qual é sua terceira nota?"))
var nota4 = Number(prompt("Qual é sua quarta nota?"))

var media = (nota1 + nota2 + nota3 + nota4) / 4

if(media >= 7 ) {
    console.log("Parabéns você foi aprovado!!!")
}else {
    console.log("EITA! você foi reprovado")
}