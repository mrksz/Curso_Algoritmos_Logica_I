//Aula 24 - Estrutura - ESCOLHA

/* Código em Portugol:
Var
// Seção de Declarações das variáveis
    valor01, valor02, resultado: real
    operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
    //escreva("A proposta desse programa é calcular dois valores baseado na operação da sua escolha.")    
    escreva("Digite o primeiro valor: ")
    leia(valor01)
    escreva("Digite a operação: Ex: +, -, *, / ")
    leia(operacao)   
    escreva("Digite o segundo valor: ")
    leia(valor02)

    escolha operacao
        caso "+"
            resultado := valor01 + valor02
        caso "-"
            resultado := valor01 - valor02
        caso "*"
            resultado := valor01 * valor02
        caso "/"
            resultado := valor01 / valor02
    fimescolha

    escreva("Resultado do calculo é: ", resultado)

Fimalgoritmo
*/

//ATALHOS: SHIFT+TAB, o código volta um tab para trás

function acaoBotao() {
    var valor01, valor02, resultado, operacao;
    //essas variaveis serão usadas apenas dentro da função

    valor01 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operação: Ex: +, -, *, /")
    valor02 = prompt("Digite o segundo valor: ")

    switch (operacao) {
        case "+": //é obrigatório ter esses dois pontos
            resultado = parseInt( valor01 ) + parseInt( valor02 )
            break;
        //para cada case você tem que dar um "break". Senão ele continua para o próximo caso até cair no default.
        case "-":
            resultado = parseInt( valor01 ) - parseInt( valor02 )
            break;
        case "*":
            resultado = parseInt( valor01 ) * parseInt( valor02 )
            break;
        case "/":
            resultado = parseInt( valor01 ) / parseInt( valor02 )
            break;
        //default:
        //    break;
        //o default é: caso não foi nenhum dos casos anteriores, usa esse. Nesse exemplo, não tem default, pq vamos definir para todos aqui,
    }

    document.getElementById("paragrafo").innerText = resultado
}
