// Testes meus
linguagem = "Testes"
console.log("Passando somente a variável e o novo valor dela." + "\nValor novo da variável: " + linguagem)
// numUm = 10
// numDois = 10
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  rl.question('Digite um número: ', (numUm) => {
  rl.question('Digite outro número: ', (numDois) => {

    var numUmNumero = parseFloat(numUm);
    var numDoisNumero = parseFloat(numDois);

Resultado_1 = numUmNumero + numDoisNumero
console.log("Resultado da SOMA é >>> " + Resultado_1)
Resultado_2 = numUmNumero - numDoisNumero
console.log("Resultado da PERDA é >>> " + Resultado_2)
Resultado_3 = numUmNumero * numDoisNumero
console.log("Resultado da MULTIPLICAÇÂO é >>> " + Resultado_3)
Resultado_4 = numUmNumero / numDoisNumero
console.log("Resultado da DIVISÃO é >>> " + Resultado_4)

  rl.close();
  })
})

// #############       OUTRA FORMA DE FAZER        #############

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Digite um número: ', (numUm) => {
//   rl.question('Digite outro número: ', (numDois) => {
//     // Convertendo as entradas do usuário para números
//     var numUmNumero = parseFloat(numUm);
//     var numDoisNumero = parseFloat(numDois);

//     // Realizando as operações matemáticas
//     var resultadoSoma = numUmNumero + numDoisNumero;
//     var resultadoSubtracao = numUmNumero - numDoisNumero;
//     var resultadoMultiplicacao = numUmNumero * numDoisNumero;
//     var resultadoDivisao = numUmNumero / numDoisNumero;

//     // Exibindo os resultados
//     console.log("Resultado da SOMA é >>> " + resultadoSoma);
//     console.log("Resultado da SUBTRAÇÃO é >>> " + resultadoSubtracao);
//     console.log("Resultado da MULTIPLICAÇÃO é >>> " + resultadoMultiplicacao);
//     console.log("Resultado da DIVISÃO é >>> " + resultadoDivisao);
    
//     // Fechando a interface readline
//     rl.close();
//   });
// });


// #############       OUTRA FORMA MAIS COMPLEXA        #############

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Digite um número: ', (numUm) => {
//   rl.question('Digite outro número: ', (numDois) => {
// //     // Convertendo as entradas do usuário para números
// //     var numUmNumero = parseFloat(numUm);
// //     var numDoisNumero = parseFloat(numDois);

//     // Verificando se as entradas são números válidos
//     // if (!isNaN(numUmNumero) && !isNaN(numDoisNumero)) {
//     //     // Realizando a soma
//     //     var Resultado_1 = numUmNumero + numDoisNumero;

//     //     // Exibindo o resultado
//     //     console.log("Resultado é >>> " + Resultado_1);
//     // } else {
//     //     console.log("Por favor, insira números válidos.");
//     // }
//     // rl.close();
//   });
// });
