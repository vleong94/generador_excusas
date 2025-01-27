import "./style.css";

const subjects = [
  "Mi jefe",
  "El médico del hospital",
  "Un influencer de fitness",
  "El cura del barrio",
  "El repartidor de Uber Eats",
  "Un político corrupto",
  "Un abogado sin clientes",
  "Un niño con una pistola Nerf",
  "El vecino conspiranoico",
  "Un payaso triste"
];

const actions = [
  "simuló su propio secuestro",
  "me culpó de un crimen que no cometí",
  "me dejó atrapado en un ataúd de prueba",
  "intentó sobornarme con una pizza fría",
  "se declaró fanático de mi peor enemigo",
  "dijo que soy la reencarnación de su ex",
  "me amenazó con convertir mis secretos en memes",
  "intentó robarse mi identidad en el mercado negro",
  "me encerró en el baño por despecho",
  "convenció a todos de que soy un robot defectuoso"
];

const objects = [
  "para evitar pagar la manutención de sus hijos",
  "porque perdió dinero apostando en criptomonedas",
  "al descubrir que el mundo no se acabará este año",
  "para no admitir que odia a los gatos",
  "debido a un pacto con su suegra",
  "porque su serie favorita fue cancelada",
  "para no asistir a una intervención familiar",
  "porque confundió mi cara con un meme viral",
  "para justificar un tatuaje de pésimo gusto",
  "al darse cuenta de que su perro lo supera intelectualmente"
];

const places = [
  "en un centro comercial abandonado",
  "en el baño de un hospital",
  "en una morgue equivocada",
  "en el set de un reality show fallido",
  "en un búnker lleno de latas de atún",
  "en un casino ilegal",
  "en una terapia grupal de desconocidos",
  "en un campo de paintball con armas reales",
  "en un tren detenido por un ataque de pánico colectivo",
  "en una reunión de vecinos llena de resentimientos"
];

function generateExcuse() {
  const subject = subjects[Math.floor(Math.random() * subjects.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];
  const object = objects[Math.floor(Math.random() * objects.length)];
  const place = places[Math.floor(Math.random() * places.length)];

  return `${subject} ${action} ${object} ${place}.`;
}

document.getElementById("generate-btn").addEventListener("click", () => {
  const excuse = generateExcuse();
  document.getElementById("excuse").textContent = excuse;
});
