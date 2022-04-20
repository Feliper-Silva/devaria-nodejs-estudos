const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(
  "Esse programa vai checar se você e maior de 18 anos e tem habilitação para saber se você pode entrar no kart"
);
console.log(
  "Além de suas verificações, precisamos verificar se você esta na lista de presença do horário"
);

readline.question("Qual ano do seu nascimento: ", ano => {
  if (ano > 2004) {
    console.log("Você não tem 18 anos");
  } else {
    readline.question("Você tem habilitação? (Sim/Não)", habilitacao => {
      if (!(habilitacao.toUpperCase() === "SIM")) {
        console.log("Você não tem habilitação para entrar no kart!");
      } else {
        readline.question("Qual seu nome? ", nome => {
          switch (nome) {
            case "Douglas":
              console.log("Bem-vindo ao kart Douglas");
              break;
            case "Rafael":
              console.log("Bem-vindo ao kart Rafael");
              break;
            default:
              console.log(
                "Seu nome não foi identificado na lista de presença!!"
              );
          }
        });
      }
    });
  }
});
