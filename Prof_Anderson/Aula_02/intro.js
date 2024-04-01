// CAP 1 - Introdução à linguagem Javascript - DIA 04/03/2024

// function f () {
//     let nome = 'João';
//     function g () {
//         console.log (nome);
//     }
//     g()
// }
// f()


//                      //                      //                      //                      //

// function ola(){
//     let nome = 'João';
//         return function (){
//         console.log ('Fala ae, João');
//     }
// }
//     let olaResult = ola();
//     /*perceba que aqui a função ola já terminou.
//      É de se esperar que a variável nome já não
//      possa ser acessada.*/
//      olaResult();

//      //também vale com parâmetros
//      function saudacoesFactory(saudacao, nome){
//         return function (){
//         console.log (saudacao + ', ' + nome);
//     }
// }
//     let olaJoao = saudacoesFactory ('Olá', 'João');
//     let tchauJoao = saudacoesFactory('Tchau', 'João');
//         olaJoao();
//         tchauJoao();


//                      //                      //                      //                      //

// function eAgora(){
//     let cont = 1;
// function f1 (){
//     console.log (cont);
// }
// cont++;
//     function f2 (){
//     console.log (cont);
// }
//  //JSON contendo as duas funções
//  return {f1, f2}
// }
//  let eAgoraResult = eAgora();
//  /* neste momento, a funcao eAgora já
//  executou por completo e a variável
//  cont já foi incrementada. Seu valor final
//  é mantido e, assim, ambas f1 e f2 exibirão 2.
//  */
//  eAgoraResult.f1();
//  eAgoraResult.f2();

 //                      //                      //                      //                      //

//  CAP - 2 - JSON - Javascript Object Notation

//  let pessoa = {
//     nome: "João",
//     idade: 17,
// }
// //o acesso a propriedades pode ser feito com ponto
// console.log("Me chamo " + pessoa.nome);
// //e com [] também
// // console.log("Tenho " + pessoa["idade"] + " anos");
// // OU
// let i = "idade"
// console.log("Tenho " + pessoa[i] + " anos");


//                      //                      //                      //                      //


// let pessoaComEndereco = {
//     nome: "Maria",
//     idade: 21,
//     endereco: {
//     logradouro: "Rua B",
//     numero: 121,
//     },
// };
// console.log(
//     `Sou ${pessoaComEndereco.nome},
//     tenho ${pessoaComEndereco.idade} anos
//     e moro na rua ${pessoaComEndereco.endereco["logradouro"]}
//     número ${pessoaComEndereco["endereco"]["numero"]}`
//  );


//                      //                      //                      //                      //


//  let concessionaria = {
//     cnpj: "00011122210001-45",
//     endereco: {
//     logradouro: "Rua A",
//     numero: 10,
//     bairro: "Vila J",
// },
//     veiculos: [
// {
//     marca: "Ford",
//     modelo: "Ecosport",
//     anoDeFabricacao: 2018,
//     },
// {
//     marca: "Chevrolet",
//     modelo: "Onix",
//     anoDeFabricacao: 2020,
//     },
// {
//  marca: "Volkswagen",
//  modelo: "Nivus",
//  anoDeFabricacao: 2020,
//         },
//     ],
// };
//     for (let veiculo of concessionaria.veiculos) {
//         console.log(`Marca: ${veiculo.marca}`);
//         console.log(`Modelo: ${veiculo.modelo}`);
//         console.log(`Ano de Fabricação: ${veiculo.anoDeFabricacao}\n`);
// }


//                      //                      //                      //                      //


// let calculadora = {
// //pode ser arrow function
//     soma: (a, b) => a + b,
// //e função comum também
//     subtracao: function (a, b) {
//         return a - b;
//     },
// };
// console.log(`2 + 3 = ${calculadora.soma(2, 3)}`);
// console.log(`2 - 3 = ${calculadora.subtracao(2, 3)}`);


//                      //                      //                      //                      //


// CAP - 3 - EXECUÇÃO SÍCRONA E ASSÍCRONA

// Modelo de execução é conhecido como síncrono ou bloqueante.

// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000
// //não esqueça do ;, única instrução no corpo do while
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }
//     const a = 2 + 3
//     const b = 5 + 9
//     const d = demorada()
// /*12 o valor de e não depende do valor devolvido 13 pela função demorada.14 */
//     const e = 2 + a + b
//     console.log(e)

//                      //                      //                      //                      //

// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     //não esqueça do ;, única instrução no corpo do while
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }
//     const a = 2 + 3
//     const b = 5 + 9
// //função será executada depois de, pelo menos, 500 milissegundos
//     setTimeout(function(){
//     const d = demorada()
//     console.log(d)
// }, 500)

// //enquanto isso, essas linhas prosseguem executando
// //sem ficar esperando
// const e = a + b
// console.log(e)

//                      //                      //                      //                      //


// setTimeout(function(){
//     console.log('dentro da timeout')
// }, 0)
// const a = new Date().getTime() + 1000
// //não esqueça do ;, única instrução no corpo do while
// while (new Date().getTime() <= a);
// console.log('fora da timeout')

//                      //                      //                      //                      //

// function demorada(tempo) {
//     console.log(`demorada ${tempo}`);
//     const atualMaisTempo = new Date().getTime() + tempo;
//     //não esqueça do ;, única instrução no corpo do while
//     while (new Date().getTime() <= atualMaisTempo);
//     const d = 8 + 4;
//     return d;
// }
// setTimeout(function (){demorada(2000)}, 2000);
// setTimeout(function (){demorada(1000)}, 1000);
// console.log("chegou ao fim do script principal");