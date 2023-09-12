//console.log("O arquivo separado está funcionando");

//------------------------------Daqui pra baixo

//alteração do titulo
//console.log(document);
//cria variavel e atribui o valor a ela
let titulo = document.querySelector(".titulo");
//console.log(titulo);
//atribuição de um novo valor na variavel titulo
titulo.textContent = "Fake Natty Nutrição!";

//alteração da tabela
let paciente = document.querySelector("#primeiro-paciente");
let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");
let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura * altura);

console.log("O IMC de Paulo é:" + imc);