function distribution(data) {
  const total = data.reduce((total, curr) => total + curr.valor, 0);

  const result = data.map((state) => {
    return { ...state, percentual: ((state.valor * 100) / total).toFixed(2) + "%" };
  });

  return { "Faturamento total": total, "Faturamento por estado": result };
}

revenueByState = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36678.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 },
];

const result = distribution(revenueByState);

console.log(result);
