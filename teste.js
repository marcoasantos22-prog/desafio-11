// Prática: Teste no console e anote o resultado de cada linha:

console.log(Boolean(0));
// resultado: false

console.log(Boolean(""));
// resultado: false

console.log(Boolean(" "));
// resultado: true

console.log(Boolean("0"));
// resultado: true

console.log(Boolean("false"));
// resultado: true

console.log(Boolean(null));
// resultado: false

console.log(Boolean(undefined));
// resultado: false

console.log(Boolean(NaN));
// resultado: false

console.log(Boolean([]));
// resultado: true

console.log(Boolean({}));
// resultado: true

// Depois, crie uma variável nome e escreva um if que exiba "Nome preenchido" ou "Nome vazio". Teste com "", " " e "Ana".
let nome = "Ana";

if (nome) {
  console.log("Nome preenchido");
} else {
  console.log("Nome vazio");
}