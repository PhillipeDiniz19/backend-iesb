var prompt = require("prompt-sync")();

function calcularVolume(raio, altura) {
    const volume = Math.PI * raio * raio * altura;
    return volume;
  }
  
  const raio = parseFloat(prompt("Digite o raio da caixa d'água: "));
  const altura = parseFloat(prompt("Digite a altura da caixa d'água: "));
  
  const volumeCaixaDAgua = calcularVolume(raio, altura);
  
  console.log(`O volume da caixa d'água é de ${volumeCaixaDAgua.toFixed(2)} litros.`);
  