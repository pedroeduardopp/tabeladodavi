
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
  { numero: 21, simbolo: "Sc", nome: "Escândio", grupo: 3, periodo: 4 },
  { numero: 22, simbolo: "Ti", nome: "Titânio", grupo: 4, periodo: 4 },
  { numero: 23, simbolo: "V", nome: "Vanádio", grupo: 5, periodo: 4 },
  { numero: 24, simbolo: "Cr", nome: "Cromo", grupo: 6, periodo: 4 },
  { numero: 25, simbolo: "Mn", nome: "Manganês", grupo: 7, periodo: 4 },
  { numero: 26, simbolo: "Fe", nome: "Ferro", grupo: 8, periodo: 4 },
  { numero: 27, simbolo: "Co", nome: "Cobalto", grupo: 9, periodo: 4 },
  { numero: 28, simbolo: "Ni", nome: "Níquel", grupo: 10, periodo: 4 },
  { numero: 29, simbolo: "Cu", nome: "Cobre", grupo: 11, periodo: 4 },
  { numero: 30, simbolo: "Zn", nome: "Zinco", grupo: 12, periodo: 4 },
  { numero: 31, simbolo: "Ga", nome: "Gálio", grupo: 13, periodo: 4 },
  { numero: 32, simbolo: "Ge", nome: "Germânio", grupo: 14, periodo: 4 },
  { numero: 33, simbolo: "As", nome: "Arsênio", grupo: 15, periodo: 4 },
  { numero: 34, simbolo: "Se", nome: "Selênio", grupo: 16, periodo: 4 },
  { numero: 35, simbolo: "Br", nome: "Bromo", grupo: 17, periodo: 4 },
  { numero: 36, simbolo: "Kr", nome: "Criptônio", grupo: 18, periodo: 4 },
  { numero: 37, simbolo: "Rb", nome: "Rubídio", grupo: 1, periodo: 5 },
  { numero: 38, simbolo: "Sr", nome: "Estrôncio", grupo: 2, periodo: 5 },
  { numero: 39, simbolo: "Y", nome: "Ítrio", grupo: 3, periodo: 5 },
  { numero: 40, simbolo: "Zr", nome: "Zircônio", grupo: 4, periodo: 5 },
  { numero: 41, simbolo: "Nb", nome: "Nióbio", grupo: 5, periodo: 5 },
  { numero: 42, simbolo: "Mo", nome: "Molibdênio", grupo: 6, periodo: 5 },
  { numero: 43, simbolo: "Tc", nome: "Tecnécio", grupo: 7, periodo: 5 },
  { numero: 44, simbolo: "Ru", nome: "Rutênio", grupo: 8, periodo: 5 },
  { numero: 45, simbolo: "Rh", nome: "Ródio", grupo: 9, periodo: 5 },
  { numero: 46, simbolo: "Pd", nome: "Paládio", grupo: 10, periodo: 5 },
  { numero: 47, simbolo: "Ag", nome: "Prata", grupo: 11, periodo: 5 },
  { numero: 48, simbolo: "Cd", nome: "Cádmio", grupo: 12, periodo: 5 },
  { numero: 49, simbolo: "In", nome: "Índio", grupo: 13, periodo: 5 },
  { numero: 50, simbolo: "Sn", nome: "Estanho", grupo: 14, periodo: 5 },
  { numero: 51, simbolo: "Sb", nome: "Antimônio", grupo: 15, periodo: 5 },
  { numero: 52, simbolo: "Te", nome: "Telúrio", grupo: 16, periodo: 5 },
  { numero: 53, simbolo: "I", nome: "Iodo", grupo: 17, periodo: 5 },
  { numero: 54, simbolo: "Xe", nome: "Xenônio", grupo: 18, periodo: 5 },
  { numero: 55, simbolo: "Cs", nome: "Césio", grupo: 1, periodo: 6 },
  { numero: 56, simbolo: "Ba", nome: "Bário", grupo: 2, periodo: 6 },
  { numero: 57, simbolo: "La", nome: "Lantânio", grupo: 3, periodo: 6 },
  { numero: 58, simbolo: "Ce", nome: "Cério", grupo: null, periodo: 6 },
  { numero: 59, simbolo: "Pr", nome: "Praseodímio", grupo: null, periodo: 6 },
  { numero: 60, simbolo: "Nd", nome: "Neodímio", grupo: null, periodo: 6 },
  { numero: 61, simbolo: "Pm", nome: "Promécio", grupo: null, periodo: 6 },
  { numero: 62, simbolo: "Sm", nome: "Samário", grupo: null, periodo: 6 },
  { numero: 63, simbolo: "Eu", nome: "Európio", grupo: null, periodo: 6 },
  { numero: 64, simbolo: "Gd", nome: "Gadolínio", grupo: null, periodo: 6 },
  { numero: 65, simbolo: "Tb", nome: "Térbio", grupo: null, periodo: 6 },
  { numero: 66, simbolo: "Dy", nome: "Disprósio", grupo: null, periodo: 6 },
  { numero: 67, simbolo: "Ho", nome: "Hólmio", grupo: null, periodo: 6 },
  { numero: 68, simbolo: "Er", nome: "Érbio", grupo: null, periodo: 6 },
  { numero: 69, simbolo: "Tm", nome: "Túlio", grupo: null, periodo: 6 },
  { numero: 70, simbolo: "Yb", nome: "Itérbio", grupo: null, periodo: 6 },
  { numero: 71, simbolo: "Lu", nome: "Lutécio", grupo: 3, periodo: 6 },
  { numero: 72, simbolo: "Hf", nome: "Háfnio", grupo: 4, periodo: 6 },
  { numero: 73, simbolo: "Ta", nome: "Tântalo", grupo: 5, periodo: 6 },
  { numero: 74, simbolo: "W", nome: "Tungstênio", grupo: 6, periodo: 6 },
  { numero: 75, simbolo: "Re", nome: "Rênio", grupo: 7, periodo: 6 },
  { numero: 76, simbolo: "Os", nome: "Ósmio", grupo: 8, periodo: 6 },
{ numero: 77, simbolo: "Ir", nome: "Irídio", grupo: 9, periodo: 6 },
{ numero: 78, simbolo: "Pt", nome: "Platina", grupo: 10, periodo: 6 },
{ numero: 79, simbolo: "Au", nome: "Ouro", grupo: 11, periodo: 6 },
{ numero: 80, simbolo: "Hg", nome: "Mercúrio", grupo: 12, periodo: 6 },
{ numero: 81, simbolo: "Tl", nome: "Tálio", grupo: 13, periodo: 6 },
{ numero: 82, simbolo: "Pb", nome: "Chumbo", grupo: 14, periodo: 6 },
{ numero: 83, simbolo: "Bi", nome: "Bismuto", grupo: 15, periodo: 6 },
{ numero: 84, simbolo: "Po", nome: "Polônio", grupo: 16, periodo: 6 },
{ numero: 85, simbolo: "At", nome: "Astato", grupo: 17, periodo: 6 },
{ numero: 86, simbolo: "Rn", nome: "Radônio", grupo: 18, periodo: 6 },
{ numero: 87, simbolo: "Fr", nome: "Frâncio", grupo: 1, periodo: 7 },
{ numero: 88, simbolo: "Ra", nome: "Rádio", grupo: 2, periodo: 7 },
{ numero: 89, simbolo: "Ac", nome: "Actínio", grupo: null, periodo: 7 },
{ numero: 90, simbolo: "Th", nome: "Tório", grupo: null, periodo: 7 },
{ numero: 91, simbolo: "Pa", nome: "Protactínio", grupo: null, periodo: 7 },
{ numero: 92, simbolo: "U", nome: "Urânio", grupo: null, periodo: 7 },
{ numero: 93, simbolo: "Np", nome: "Netúnio", grupo: null, periodo: 7 },
{ numero: 94, simbolo: "Pu", nome: "Plutônio", grupo: null, periodo: 7 },
{ numero: 95, simbolo: "Am", nome: "Amerício", grupo: null, periodo: 7 },
{ numero: 96, simbolo: "Cm", nome: "Cúrio", grupo: null, periodo: 7 },
{ numero: 97, simbolo: "Bk", nome: "Berquélio", grupo: null, periodo: 7 },
{ numero: 98, simbolo: "Cf", nome: "Califórnio", grupo: null, periodo: 7 },
{ numero: 99, simbolo: "Es", nome: "Einstênio", grupo: null, periodo: 7 },
{ numero: 100, simbolo: "Fm", nome: "Férmio", grupo: null, periodo: 7 },
{ numero: 101, simbolo: "Md", nome: "Mendelévio", grupo: null, periodo: 7 },
{ numero: 102, simbolo: "No", nome: "Nobélio", grupo: null, periodo: 7 },
{ numero: 103, simbolo: "Lr", nome: "Laurêncio", grupo: null, periodo: 7 },
{ numero: 104, simbolo: "Rf", nome: "Rutherfórdio", grupo: 4, periodo: 7 },
{ numero: 105, simbolo: "Db", nome: "Dúbnio", grupo: 5, periodo: 7 },
{ numero: 106, simbolo: "Sg", nome: "Seabórgio", grupo: 6, periodo: 7 },
{ numero: 107, simbolo: "Bh", nome: "Bóhrio", grupo: 7, periodo: 7 },
{ numero: 108, simbolo: "Hs", nome: "Hássio", grupo: 8, periodo: 7 },
{ numero: 109, simbolo: "Mt", nome: "Meitnério", grupo: 9, periodo: 7 },
{ numero: 110, simbolo: "Ds", nome: "Darmstádtio", grupo: 10, periodo: 7 },
{ numero: 111, simbolo: "Rg", nome: "Roentgênio", grupo: 11, periodo: 7 },
{ numero: 112, simbolo: "Cn", nome: "Copernício", grupo: 12, periodo: 7 },
{ numero: 113, simbolo: "Nh", nome: "Nihônio", grupo: 13, periodo: 7 },
{ numero: 114, simbolo: "Fl", nome: "Fleróvio", grupo: 14, periodo: 7 },
{ numero: 115, simbolo: "Mc", nome: "Moscóvio", grupo: 15, periodo: 7 },
{ numero: 116, simbolo: "Lv", nome: "Livermório", grupo: 16, periodo: 7 },
{ numero: 117, simbolo: "Ts", nome: "Tenessino", grupo: 17, periodo: 7 },
{ numero: 118, simbolo: "Og", nome: "Oganessônio", grupo: 18, periodo: 7 }
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
