function processRevenue(data) {
  const total = data.reduce((acc, curr) => acc + curr.valor, 0);

  const avg = parseFloat((total / data.length).toFixed(4));

  const values = data.map((obj) => obj.valor);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  const belowAvg = data.filter((obj) => obj.valor < avg).length;

  return {
    Média: avg,
    "Menor Valor": minValue,
    "Maior Valor": maxValue,
    "Dias abaixo da média": belowAvg,
  };
}

const fs = require("fs");
const path = require("path");

const filePath = process.argv[2];

if (filePath) {
  fs.readFile(path.resolve(filePath), "utf8", (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo:", err.message);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      const result = processRevenue(jsonData);
      console.log(result);
    } catch (e) {
      console.error("Erro ao processar o arquivo:", e.message);
    }
  });
} else {
  console.log("Não foi possível ler o arquivo.");
}
