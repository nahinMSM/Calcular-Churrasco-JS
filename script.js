
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdTotalCerveja = cervejaPP(duracao) * adultos;
    let qdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qdTotalCarne / 1000} kg de carnes</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qdTotalCerveja / 355)} Latas de cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qdTotalBebidas / 2000)} Garrafas de 2L de bebidas</p>`;

    console.log(resultado)
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    }
    else {
        return 400;
    }
}
function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 200;
    }
    else {
        return 1200;
    }
}
function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    }
    else {
        return 1000;
    }
}