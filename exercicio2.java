import java.util.Scanner;

public class exercicio2 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o número de aulas do semestre: ");
        int numeroAulasSemestre = scanner.nextInt();

        System.out.print("Digite quantas faltas o aluno teve: ");
        int quantidadeFaltas = scanner.nextInt();

        System.out.print("Digite a nota p1: ");
        double notaP1 = scanner.nextDouble();

        System.out.print("Digite a nota p2: ");
        double notaP2 = scanner.nextDouble();

        double percentualPresenca = ((double)(numeroAulasSemestre - quantidadeFaltas) / numeroAulasSemestre) * 100;

        String situacaoFinal = "";
        double notaRecuperacao = 0;


        if (percentualPresenca < 75) {
            situacaoFinal = "Reprovado por falta";
        } else {

            double media = (notaP1 + notaP2) / 2;

            if (media >= 7.0) {
                situacaoFinal = "Parabens! Voce foi Aprovado!";
            } else if (media >= 5.0) {
                System.out.print("Digite a nota da recuperação: ");
                notaRecuperacao = scanner.nextDouble();
                double mediaFinalRecuperacao = (media + notaRecuperacao) / 2;

                if (mediaFinalRecuperacao >= 5.0) {
                    situacaoFinal = "Aprovado na Rec. Parabens!";
                } else {
                    situacaoFinal = "Reprovado na Rec :(";
                }
            } else {
                situacaoFinal = "Reprovado por nota. Contacte a Coordenacao!";
            }
        }


        System.out.println("
--- Relatório Final do Aluno ---");
        System.out.println("Número de aulas do semestre: " + numeroAulasSemestre);
        System.out.println("Número de faltas do aluno: " + quantidadeFaltas);
        System.out.printf("Percentual de presença do aluno: %.2f%%
", percentualPresenca);
        System.out.println("A primeira nota: " + notaP1);
        System.out.println("Segunda nota: " + notaP2);

        if (notaRecuperacao > 0) {
            System.out.println("Nota complementar (recuperação): " + notaRecuperacao);
        } else {
            System.out.println("Nota complementar (recuperação): (Não foi necessária)");
        }

        System.out.println("Situação final do aluno: " + situacaoFinal);

        scanner.close();
    }
}
