const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

const validarNumeroInformado = numero => {
  let resultado = Number.parseFloat(numero);
  if (!resultado) {
    console.log("Número informado é invalido");
  }
  return resultado;
};

const validarOperadorInformado = operador => {
  switch (operador) {
    case "+":
    case "-":
    case "/":
    case "*":
    case "%":
      return operador;
    default:
      console.log("Operador informado é invalido");
      return null;
  }
};

readline.question("Escreva o primeiro número ", primeiroNumero => {
  const numeroValidado1 = validarNumeroInformado(primeiroNumero);
  if (numeroValidado1) {
    readline.question("Escreva o segundo número ", segundoNumero => {
      const numeroValidado2 = validarNumeroInformado(segundoNumero);

      if (numeroValidado2) {
        readline.question("Escreva o operador ", operador => {
          const operadorValidado = validarOperadorInformado(operador);
          if (operadorValidado) {
            switch (operadorValidado) {
              case "+":
                console.log(
                  `Operador selecionado adição resultado ${numeroValidado1} + ${numeroValidado2} = ${
                    numeroValidado1 + numeroValidado2
                  }`
                );
                break;
              case "-":
                console.log(
                  `Operador selecionado subtração resultado ${numeroValidado1} - ${numeroValidado2} = ${
                    numeroValidado1 - numeroValidado2
                  }`
                );
                break;
              case "*":
                console.log(
                  `Operador selecionado multiplicação resultado ${numeroValidado1} * ${numeroValidado2} = ${
                    numeroValidado1 * numeroValidado2
                  }`
                );
                break;
              case "/":
                console.log(
                  `Operador selecionado divisão resultado ${numeroValidado1} / ${numeroValidado2} = ${
                    numeroValidado1 / numeroValidado2
                  }`
                );
                break;
              case "%":
                console.log(
                  `Operador selecionado resto resultado ${numeroValidado1} % ${numeroValidado2} = ${
                    numeroValidado1 % numeroValidado2
                  }`
                );
                break;
            }
          }
        });
      }
    });
  }
});
