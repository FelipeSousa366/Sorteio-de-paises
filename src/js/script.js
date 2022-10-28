let btn = document.getElementById("btnMensagem");
let texto = document.getElementById("texto");
let paises = [
  ["Brasil", "Samba", 0],
  ["México", "Comidas apimentadas", 0],
  ["Australia", "Modo de vida hardcore", 0],
  ["China", "Gente em todo canto", 0],
  ["India", "Elefantes", 0],
  ["Japão", "Animes", 0],
  ["Russia", "Frio", 0],
  ["Alemanha", "perdido todas as guerras", 0],
  ["Venezuela", "Fome", 0],
  ["Argentina", "Los hermanos", 0],
];

btn.onclick = function () {
  var x = Math.floor(Math.random() * 10);
  paises[x][2]++;
  texto.innerHTML = `<strong>${paises[x][0]}</strong> caracterizado por ter ${paises[x][1]} apareceu ${paises[x][2]} vezes`;
};
