
const elementos = [
  { numero: 1, simbolo: "H", nome: "Hidrogênio", grupo: 1, periodo: 1 },
  { numero: 2, simbolo: "He", nome: "Hélio", grupo: 18, periodo: 1 },
  { numero: 3, simbolo: "Li", nome: "Lítio", grupo: 1, periodo: 2 },
  { numero: 4, simbolo: "Be", nome: "Berílio", grupo: 2, periodo: 2 },
  { numero: 5, simbolo: "B", nome: "Boro", grupo: 13, periodo: 2 },
  { numero: 6, simbolo: "C", nome: "Carbono", grupo: 14, periodo: 2 },
  { numero: 7, simbolo: "N", nome: "Nitrogênio", grupo: 15, periodo: 2 },
  { numero: 8, simbolo: "O", nome: "Oxigênio", grupo: 16, periodo: 2 },
  { numero: 9, simbolo: "F", nome: "Flúor", grupo: 17, periodo: 2 },
  { numero: 10, simbolo: "Ne", nome: "Neônio", grupo: 18, periodo: 2 },
  { numero: 11, simbolo: "Na", nome: "Sódio", grupo: 1, periodo: 3 },
  { numero: 12, simbolo: "Mg", nome: "Magnésio", grupo: 2, periodo: 3 },
  { numero: 13, simbolo: "Al", nome: "Alumínio", grupo: 13, periodo: 3 },
  { numero: 14, simbolo: "Si", nome: "Silício", grupo: 14, periodo: 3 },
  { numero: 15, simbolo: "P", nome: "Fósforo", grupo: 15, periodo: 3 },
  { numero: 16, simbolo: "S", nome: "Enxofre", grupo: 16, periodo: 3 },
  { numero: 17, simbolo: "Cl", nome: "Cloro", grupo: 17, periodo: 3 },
  { numero: 18, simbolo: "Ar", nome: "Argônio", grupo: 18, periodo: 3 },
  { numero: 19, simbolo: "K", nome: "Potássio", grupo: 1, periodo: 4 },
  { numero: 20, simbolo: "Ca", nome: "Cálcio", grupo: 2, periodo: 4 },
  // [... adicionaria os demais até o 118 ...]
];

const tabela = document.getElementById("tabela");

elementos.forEach(el => {
  const div = document.createElement("div");
  div.classList.add("elemento");
  div.style.gridColumnStart = el.grupo;
  div.style.gridRowStart = el.periodo;
  div.innerHTML = `<strong>${el.simbolo}</strong><br>${el.numero}`;
  div.addEventListener("click", () => mostrarDetalhes(el));
  tabela.appendChild(div);
});

function mostrarDetalhes(el) {
  const modal = document.getElementById("modal");
  const detalhes = document.getElementById("detalhes");
  detalhes.innerHTML = `
    <h2>${el.nome}</h2>
    <p><strong>Símbolo:</strong> ${el.simbolo}</p>
    <p><strong>Número atômico:</strong> ${el.numero}</p>
    <p><strong>Grupo:</strong> ${el.grupo}</p>
    <p><strong>Período:</strong> ${el.periodo}</p>
  `;
  modal.classList.remove("hidden");
}

document.getElementById("fechar").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
});
