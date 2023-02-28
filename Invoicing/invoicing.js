const dados = require('./dados.json');

function invoicing() {
  const invoices = []
  const valores = [];

  dados.forEach(invoice => {
    if (invoice.valor !== 0) {
      invoices.push(invoice)
      valores.push(invoice.valor)
    }
  })

  console.log("Menor valor de faturamento do mes: ", Math.min(...valores))
  console.log("Maior valor de faturamento do mes: ", Math.max(...valores))
  faturamentoDiarioMaiorQueMediaMensal(invoices);
}

// Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
function faturamentoDiarioMaiorQueMediaMensal(invoices) {
  let sum = 0;
  let media = 0;
  let faturamentoMaiorQueMediaMensal = [];
  invoices.map(faturamentos => {
    sum += faturamentos.valor;
    media = sum / invoices.length;
  });

  invoices.forEach(invoice => invoice.valor > media && faturamentoMaiorQueMediaMensal.push("dia:", invoice.dia, "valor:", invoice.valor))

  console.log("Média mensal: ", media)
  console.log("Dias do mes com valor superior a media do mês: ", faturamentoMaiorQueMediaMensal)
}

invoicing()

// O menor valor de faturamento ocorrido em um dia do mês;
// function menorValorDeFaturamento(valores) {
//   console.log("Menor valor de faturamento do mes: ", Math.min(...valores))
// }

// O maior valor de faturamento ocorrido em um dia do mês;
// function maiorValorDeFaturamento(valores) {
//   console.log("Maior valor de faturamento do mes: ", Math.max(...valores))
// }



