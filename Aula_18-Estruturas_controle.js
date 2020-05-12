//Aula 16 - Tipos de estrutras de controle

/* Código em Portugpl:
escreval("Digite o nome do aluno: ")
leia(nome)
escreval("Digite a nota 01 do aluno: ")
leia(nota01)
escreval("Digite a nota 02 do aluno: ")
leia(nota02)
media := (nota01 + nota02) / 2

se media >= 5 entao
    escreval("Aprovado!", nome)
senao
    escreval("Reprovado!", nome)
fimse*/

var nome, nota01, nota02, media;

nome = prompt("Digite o nome do aluno:")
nota01 = prompt("Digite a nota 01 do aluno:")
nota02 = prompt("Digite a nota 02 do aluno:")

media = (parseInt(nota01) + parseInt(nota02)) / 2
// a função parseInt transforma para um número inteiro

if(media >= 5)
    alert ("Aprovado!" + nome)
else
    alert ("Reprovado!" + nome)

/*Se eu tivesse duas linhas de comando dentro do if, teria que usar as chaves, por exemplo:
if(media >= 5){
    alert ("Aprovado!" + nome)
    asdjad
}
*/