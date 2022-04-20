const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

const primeiraConstanteString = "Minha primeira constante";
console.log(primeiraConstanteString);

let leituraDeCampo;
readline.question("Por favor digite sua Idade: ", input => {
  leituraDeCampo = input;
  console.log(`O usuário digitou: ${leituraDeCampo}`);
});
