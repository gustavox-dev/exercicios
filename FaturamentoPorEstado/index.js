const dados = require('./valorPorEstado.json');

// calcule o percentual de representação que cada estado 
// teve dentro do valor total mensal da distribuidora.

function faturamentoPorEstado() {
  let valorTotalMensal = 0;
  let faturamentos = [];
  dados.forEach(faturamento => {
    valorTotalMensal += faturamento.valor;
    faturamentos.push(faturamento);
  });

  calculoPorcentagem(faturamentos, valorTotalMensal);
  
  console.log("valortotal: ", valorTotalMensal);
}

function calculoPorcentagem(faturamentos, valorTotalMensal){
  for(const faturamento of faturamentos){
    const porcentagem = ((faturamento.valor / valorTotalMensal) * 100).toFixed(2).concat("%");
    const estado = faturamento.estado;
    console.log({estado, porcentagem});
  }
}

faturamentoPorEstado()