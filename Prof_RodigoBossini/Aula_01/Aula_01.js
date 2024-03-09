//  Aula foi de JavaScript

var idade = 18
// var nome = "João"
console.log("Oi, " + nome)
if(idade >= 18){
    var nome = "João" /* içada (hoist) >>> independentemente de onde uma variável ou função é 
    declarada dentro de um escopo, ela é como se fosse "elevada" para o topo desse escopo.*/
    console.log("Parabéns, " + nome + ". Você pode dirigir!")
}
console.log("Até mais, " + nome)

// //                          //                          //                          //                          //
var linguagem = "JavaScript"
console.log( "Aprendendo " + linguagem)
var linguagem = "Kotlin"
console.log( "Aprendendo " + linguagem)

//                          //                          //                          //                          //

////////        Declarando constantes        ////////
// const e let: a partir da versão ECMAScript2015

let a = 2
console.log(a)
a = 3
console.log(a)
a = "Pêssego"
console.log(a)

const nome = "Bryan"
console.log(nome)
// Não pode >>> 
// nome = "Zezin"

const outroNome = 'Ana' // Pode ser utilizado aspas simples para declarar o valor da constante >>> ''
const maisUmNome = `Pedro` // Pode ser utilizado craze para declarar o valor da constante >>> ``
const idade = 20
idade.falar() // >>> Vai dar erro pois não foi criado uma função "falar"


//                          //                          //                          //  

// Fazendo uma função

function falar (){
    const idade = 20
function t1 () {
    console.log(idade)
    }
function t2 (){
    const idade = 10
    console.log(idade)
    }
    return {t1, t2}
}

const resulta = falar()
resulta.t2()