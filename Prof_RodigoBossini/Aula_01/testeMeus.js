// Fazendo uma função

function falar (){
    let idade = 20
function t1 () {
    console.log(idade)
    }
function t2 (){
    let idade = 100
    console.log(idade)
    }
    return {t1, t2}
}

let idadeM = falar()
idadeM.t2()