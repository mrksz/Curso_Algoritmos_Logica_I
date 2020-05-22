/* Curso Algorítimos e Lógica - I

Nome: Mariana Roskosz
Data: 05.2020

Aula 23 - Estrutura - SE e SENAO

*/

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
    escreva("Digite a operação: Ex: +, -, *, /")
    leia(operacao)   
    escreva("Digite o segundo valor: ")
    leia(valor02)

    se operacao = "+" entao
        resultado := valor01 + valor02
    senao
        se operacao = "-" entao
            resultado := valor01 - valor02
        senao
            se operacao = "*" entao
                resultado := valor01 * valor02
            senao
                se operacao = "/" entao
                    resultado := valor01 / valor02
                fimse
            fimse
        fimse
    fimse
    escreva("Resultado do calculo é: ", resultado)

Fimalgoritmo
*/

function acaoBotao() {
    var valor01, valor02, resultado, operacao;
    //essas variaveis serão usadas apenas dentro da função

    valor01 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operação: Ex: +, -, *, /")
    valor02 = prompt("Digite o segundo valor: ")

    if ( operacao == "+" ){
        resultado = parseInt( valor01 ) + parseInt( valor02 )
    }else if (operacao == "-"){
        resultado = parseInt( valor01 ) - parseInt( valor02 )
    }else if (operacao == "*"){
        resultado = parseInt( valor01 ) * parseInt( valor02 )
    }else if (operacao == "/"){
        resultado = parseInt( valor01 ) / parseInt( valor02 )
    }
    document.getElementById("paragrafo").innerText = resultado
}


