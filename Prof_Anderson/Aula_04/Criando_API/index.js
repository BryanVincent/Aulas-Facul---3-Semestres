const { default: axios } = require("axios")
const axio = require("axios")
// sua chave aqui
const appid = "8e753c798b6849a7c4ffe9d09019428e"
// cidade desejada
const q = "Itu"
// unidade de medida da temperatura
const units = "metric"
// idioma
const lang = "pt-BR"
// quantidade de resultados
const cnt = "10"
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`;
console.log(url)

//faz a requisição
axios
    .get(url)
    .then((res) => {
        //mostra o resultado e devolve somente a parte de interesse
        console.log("\nInicio da primeira parte")
        console.log(res);
        console.log("Fim da primeira parte\n\n\n")
        return res.data;
    })
    .then((res) => {
        //mostra o total e devolve o resultado
        console.log("\nInicio da segunda parte")
        console.log(res.cnt);
        console.log("Fim da segunda parte\n\n\n")
        return res;
    })
    .then((res) => {
        //devolve somente a lista de previsões
        console.log("\nInicio da terceira parte")
        console.log("aqui", res);
        console.log("Fim da terceira parte\n\n\n")
        return res["list"];
    })
    .then((res) => {
        //para cada resultado, mostra algumas informações
        console.log("\nInicio da quarta parte")
        for (let previsao of res) {
        console.log(`
    ${new Date(+previsao.dt * 1000).toLocaleString()},
    ${'Min: ' + previsao.main.temp_min}\u00B0C,
    ${'Max: ' + previsao.main.temp_max}\u00B0C,
    ${'Hum: ' + previsao.main.humidity}%,
    ${previsao.weather[0].description}
    `);
}
console.log("Fim da quarta parte\n\n\n")
return res;
})
.then((res) => {
//verifica quantas previsões têm percepção humana de tempertura acima de 30 graus
    console.log("\nInicio da quinta parte")
    const lista = res.filter(r => r.main.feels_like >= 30);
    console.log("Fim da quinta parte\n\n\n")
    console.log (`${lista.length} previsões têm percepção humana de temperatura acima de 30 graus`)
});