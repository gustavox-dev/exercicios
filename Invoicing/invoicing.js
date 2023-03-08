const dados = require('./dados.json');

function invoicing() {
  const faturamentos = []
  const valores = [];

  dados.forEach(faturamento => {
    if (faturamento.valor !== 0) {
      faturamentos.push(faturamento)
      valores.push(faturamento.valor)
    }
  })

  console.log("Menor valor de faturamento do mes: ", Math.min(...valores))
  console.log("Maior valor de faturamento do mes: ", Math.max(...valores))
  faturamentoDiarioMaiorQueMediaMensal(faturamentos);
}

// Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
function faturamentoDiarioMaiorQueMediaMensal(faturamentos) {
  let sum = 0;
  let media = 0;
  let faturamentoMaiorQueMediaMensal = [];
  faturamentos.map(faturamentoDiario => {
    sum += faturamentoDiario.valor;
    media = sum / faturamentos.length;
  });

  faturamentos.forEach(invoice => invoice.valor > media &&
    faturamentoMaiorQueMediaMensal.push("dia:", invoice.dia, "valor:", invoice.valor))

  console.log("Média mensal: ", media)
  console.log("Dias do mes com valor superior a media do mês: ", faturamentoMaiorQueMediaMensal)
}

invoicing()


