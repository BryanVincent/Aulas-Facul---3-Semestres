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

//                      //                      //                      //                      //

/*  O código a baixo irá, fazer um módulo para acessar o sistema de arquivos. */

// const fs = require("fs");
// const abrirArquivo = function (nomeArquivo) {
//     const exibirConteudo = function (erro, conteudo) {
//         if (erro) {
//             console.log(`Deu erro: ${erro}`);
//         } else {
//             console.log(conteudo.toString());
//         }
//     };
//     fs.readFile(nomeArquivo, exibirConteudo);
// };
//  //crie um arquivo chamado arquivo.txt com o conteúdo``2'' (sem as aspas)

// //no mesmo diretório em que se encontra seu script
// abrirArquivo("arquivo.txt");

//                      //                      //                      //                      //

/* O código a baixo irá, dobrar o valor lido do arquivo arquivo.txt e armazenar o valor obtido em um arquivo chamado dobro.txt. */

// const fs = require("fs");
// const abrirArquivo = function (nomeArquivo) {
//     const exibirConteudo = function (erro, conteudo) {
//             if (erro) {
//                 console.log(`Deu erro: ${erro}`);
//             } else {
//                 console.log(conteudo.toString());
//                 const dobro = +conteudo.toString() * 2;
//             const finalizar = function (erro){
//                 if(erro){
//                     console.log('Deu erro tentando salvar o dobro')
//                 }
//                 else{
//                     console.log("Salvou o dobro com sucesso");
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar);
//         }
//     };
//     fs.readFile(nomeArquivo, exibirConteudo);
// };
// abrirArquivo("arquivo.txt");

//                      //                      //                      //                      //

/* O código a baixo irá, fazer com que a função assíncrona devolve uma promise em estado Pending. Quando termina, ela chama a função resolve, o que quer dizer que a promise passou de Pending para Fulllled. */

// function calculoDemorado(numero) {
//     return new Promise(function (resolve, reject) {
//         let res = 0;
//         for (let i = 1; i <= numero; i++) {
//             res += i;
//         }
//         resolve(res);
//     });
// }
// calculoDemorado(10).then( (resultado) => {
//     console.log(resultado)
// })

//                      //                      //                      //                      //


/* O código a baixo irá, fazer com que a função assíncrona possa devolver uma promise já no estado Fulllled */

function calculoRapidinho (numero){
    return Promise.resolve((numero * (numero + 1)) / 2);
}
calculoRapidinho (10).then(resultado =>{
    console.log (resultado)
})
//Executa primeiro, mesmo que a promise já esteja fullfilled
console.log('Esperando...')