//Aula 22 - Operadores de concatenação

/* Código em Portugpl:
Var
// Seção de Declarações das variáveis
    nome: caractere
    numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
    escreval("Digite o nome:")
    leia(nome)
    escreval("Digite o número:")
    leia(numero)

    escreval(nome, " : ", numero, 15)

Fimalgoritmo

*/

var nome, numero;

nome = prompt("Digite o nome: ")
numero = prompt("Digite o numero: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero
//Se eu quisesse somar aqui e não concatenar, tenho que usar a função parseInt das aulas anteriores