const prompt = require('prompt-sync')();


const numeroAulasSemestre = parseInt(prompt('Digite o número de aulas do semestre: '));


const faltasAluno = parseInt(prompt('Digite a quantidade de faltas do aluno: '));


const percentualPresenca = ((numeroAulasSemestre - faltasAluno) / numeroAulasSemestre) * 100;


const notaP1 = parseFloat(prompt('Digite a nota da P1: '));


const notaP2 = parseFloat(prompt('Digite a nota da P2: '));


let media = (notaP1 + notaP2) / 2;

let situacaoFinal = '';
let notaRecuperacao = 'N/A';


if (percentualPresenca < 75) {
    situacaoFinal = 'Reprovado por Falta';
} else {
    
    if (media >= 7.0) {
        situacaoFinal = 'APROVADO';
    } else if (media >= 5.0 && media < 7.0) {
        console.log('Recuperacao!.');
        notaRecuperacao = parseFloat(prompt('Digite a nota da recuperação: '));
        const mediaFinalRecuperacao = (media + notaRecuperacao) / 2;

        if (mediaFinalRecuperacao >= 5.0) {
            situacaoFinal = 'Aprovado na Recuperação, Parabéns!';
        } else {
            situacaoFinal = 'Reprovado na Recuperação, Estude Mais!';
        }
    } else {
        situacaoFinal = 'Reprovado por Media, procure a Coordenacao    node seu_script.js';
    }
}
s
console.log('\n--- Situação do Aluno ---');
console.log(`Número de aulas do semestre: ${numeroAulasSemestre}`);
console.log(`Número de faltas do aluno: ${faltasAluno}`);
console.log(`Percentual de presença do aluno: ${percentualPresenca.toFixed(2)}%`);
console.log(`Nota P1: ${notaP1}`);
console.log(`Nota P2: ${notaP2}`);
console.log(`Média das provas: ${media.toFixed(2)}`);
if (notaRecuperacao !== 'N/A') {
    console.log(`Nota de Recuperação: ${notaRecuperacao}`);
}
console.log(`Situação Final: ${situacaoFinal}`);