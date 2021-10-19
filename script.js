// Carne - 500 gr por pessoa + de 6 horas - 750 gr
// Cerveja 1200ml por pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas - 1500ml

//crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let quantidadeTotalDeCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let quantidadeTotalDeCerveja = cervejaPorPessoa(duracao) * adultos;
    let quantidadeTotalDeBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${quantidadeTotalDeCarne / 1000}Kg de carne.</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalDeCerveja / 355)} latas de cerveja.</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalDeBebidas / 2000)} garrafas de 2L de bebida.</p>`
}

function carnePorPessoa(duracao){
    if(duracao >= 6){
        return 750;
    } else{
        return 500;
    } 
}

function cervejaPorPessoa(duracao){
    if(duracao >= 6){
        return 2000;
    } else{
        return 1200;
    } 
}

function bebidasPorPessoa(duracao){
    if(duracao >= 6){
        return 1500;
    } else{
        return 1000;
    } 
}