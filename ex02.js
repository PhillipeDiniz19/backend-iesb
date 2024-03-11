var prompt = require('prompt-sync')();

var numeroEleitores  = Number(prompt("Qual é o número de eleitores ")) // 100%
var branco = Number(prompt("Qual é o número de votos brancos?")) // ?
var nulo = Number(prompt("Qual é o número de votos nulos?")) // ?
var valido = Number(prompt("Qual é o número de votos validos?")) // ?

function calcularPercentual(valor, total) {
    return (valor / total) * 100;
}


const percentualBrancos = calcularPercentual(branco, numeroEleitores);
const percentualNulos = calcularPercentual(nulo, numeroEleitores);
const percentualValidos = calcularPercentual(valido, numeroEleitores);

    console.log(`Número total de eleitores ${numeroEleitores}`)
    console.log(`Número total de votos brancos ${percentualBrancos.toFixed(2)}%`)
    console.log(`Número total de votos nulos ${percentualNulos.toFixed(2)}%`)
    console.log(`Número total de votos validos ${percentualValidos.toFixed(2)}%`)

calcularPercentual()