/*
Descrição
Implemente uma função que receba um número inteiro positivo e retorne o
somatório de todos os valores inteiros divisíveis por 3 ou 5 que seja 
inferires ao número passado como parâmetro.
*/

const numero = document.getElementById('numero');
const btn = document.getElementById('btn');
const msg = document.getElementById('mensagem');

//Evento de click do botão onde será chamada a função handleButtonClick

btn.addEventListener('click', handleButtonClick);

//Função que será chamada pelo evento de click do botão
function handleButtonClick() {
    let num = Number(numero.value);
    msg.textContent = getNumber(num);
}

//Função que retorna o somatório de todos os valores inteiros divisíveis por 3 ou 5 que seja inferiores ao número passado como parâmetro
function getNumber(number){
    let sum = 0;
    var i;
    for(i = 1; i < number; i++){
        if(i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
    }
    return sum;
}
