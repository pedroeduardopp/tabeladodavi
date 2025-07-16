
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
