// Q.1

let A = 80000
let B = 200000
let anos = 0
while (A <= B) {
  A += A * 0.03
  B += B * 0.015
  anos++
}
console.log("Anos necessários:", anos)

// Q.2

let pares = 0
let impares = 0
for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt("Digite um número inteiro:"))
  if (num % 2 === 0) {
    pares++
  } else {
    impares++
  }
}
console.log("Pares:", pares, "Ímpares:", impares)

// Q.3

let N = parseInt(prompt("Digite a quantidade de números:"))
let menor = null
let maior = null
let soma = 0
for (let i = 0; i < N; i++) {
  let num = parseFloat(prompt("Digite um número:"))
  if (menor === null || num < menor) menor = num
  if (maior === null || num > maior) maior = num
  soma += num
}
console.log("Menor:", menor, "Maior:", maior, "Soma:", soma)

// Q.4

let salario = 1000
let percentual = 0.0015
for (let ano = 1996; ano <= new Date().getFullYear(); ano++) {
  salario += salario * percentual
  percentual *= 2
}
console.log("Salário atual:", salario.toFixed(2))

// Q.4 Salário informado pelo usuário

let salarioInicial = parseFloat(prompt("Digite o salário inicial:"))
let salario2 = salarioInicial
let percentual2 = 0.0015
for (let ano = 1996; ano <= new Date().getFullYear(); ano++) {
  salario2 += salario2 * percentual2
  percentual2 *= 2
}
console.log("Salário atual:", salario2.toFixed(2))


// Q.5

function circulo() {
  let raio = parseFloat(prompt("Digite o raio do círculo:"))
  let area = Math.PI * Math.pow(raio, 2)
  let perimetro = 2 * Math.PI * raio
  console.log("Área:", area.toFixed(2), "Perímetro:", perimetro.toFixed(2))
}
circulo()


// Q.6

function circulo() {
  let raio = parseFloat(prompt("Digite o raio do círculo:"))
  let area = Math.PI * Math.pow(raio, 2)
  let perimetro = 2 * Math.PI * raio
  console.log("Área:", area.toFixed(2), "Perímetro:", perimetro.toFixed(2))
}
circulo()




