const nomes = ["Ana","Bia", "Pedro","Carlos", "Daniel"]
console.log("O terceiro nome é:", nomes[2])

console.log("=====")

nomes.push("Flavia")
nomes.unshift("Renan")
console.log("Nomes novos:", nomes);

console.log("=====")

nomes.pop();
console.log("Apos remover o ultimo nome:", nomes);

console.log("=====")

const numerosparadobrar = [2,4,6,8]
const dobrados = numerosparadobrar.map(num => num * 2)
console.log("Valores dobrados:", dobrados);

console.log("=====")   

const numerosparafiltrar= [1,3,5,7,9]
const maioresquecinco = numerosparafiltrar.filter(num => num > 5)
console.log("Numeros maiores que 5:", maioresquecinco);

console.log("=====")