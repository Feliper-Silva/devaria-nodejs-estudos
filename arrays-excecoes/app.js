try {
  const listaDeProdutosDisponiveis = [
    "Pão",
    "Leite",
    "Café",
    "Macarrão",
    "Sabonete",
    "Detergente"
  ];

  const listaDeArgumentos = process.argv.slice(2);

  const listaDeProdutosSolicitadosDisponiveis =
    listaDeProdutosDisponiveis.filter(produto => {
      return listaDeArgumentos.find(argumento => argumento === produto);
    });
  listaDeProdutosSolicitadosDisponiveis.forEach(produto =>
    console.log(`Esse produto nos temos: ${produto}`)
  );

  const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(
    argumento => {
      return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
    }
  );

  listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento =>
    console.log(`Esse produto não temos: ${argumento}`)
  );

  listaDeProdutosDisponiveis.sort();
  listaDeProdutosDisponiveis.forEach(produto =>
    console.log(`Esse produto está disponível: ${produto}`)
  );
} catch (error) {
  console.log(`Não foi possível realizar pedido de compra `);
}
