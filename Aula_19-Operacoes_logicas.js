//Aula 19 - Operações lógicas

/* Código em Portugpl:
escreval("Digite o nome do aluno: ")
leia(nome)
escreval("Digite a nota 01 do aluno: ")
leia(nota01)
escreval("Digite a nota 02 do aluno: ")
leia(nota02)
media := (nota01 + nota02) / 2

se media >= 50 entao
    passou := verdadeiro
fimse

se ( passou ) && ( media >= 50 || media <= 70 ) entao
    escreval("Aprovado!", nome)
senao
    escreval("Reprovado!", nome)
fimse
*/


var nome, nota01, nota02, media, passou;

passou = false;

nome = prompt("Digite o nome do aluno:")
nota01 = prompt("Digite a nota 01 do aluno:")
nota02 = prompt("Digite a nota 02 do aluno:")

media = (parseInt(nota01) + parseInt(nota02)) / 2;

if(media >= 50)
    passou = true;

if(passou)
    alert ("Aprovado!" + nome)
else
    alert ("Reprovado!" + nome)

/*NEGAÇÃO:
if(!passou)
    alert ("Aprovado!" + nome)
else
    alert ("Reprovado!" + nome)
*/

/*CONJUNÇÃO:
if(passou && media >= 70)
    alert ("Aprovado!" + nome)
else
    alert ("Reprovado!" + nome)
*/

/*DISJUNÇÃO:
if(passou || media >= 70)
    alert ("Aprovado!" + nome)
else
    alert ("Reprovado!" + nome)
*/

/*DISJUNÇÃO EXCLUSIVA:
if(passou && (media >= 70 && media <= 90))
    alert ("Aprovado!" + nome)
else
    alert ("Reprovado!" + nome)
*/