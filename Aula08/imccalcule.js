//capturar os eventos do formulario
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const peso = Number(inputPeso.value)
    console.log(peso)

    const inputaltura = e.target.querySelector('#altura')
    const altura = Number(inputaltura.value)
    console.log(altura)
    const imc = calcularImc(peso, altura)

    console.log(imc)
})

function calcularImc(peso, altura){
let imc = (peso / altura ** 2);
return imc.toFixed(2);



}