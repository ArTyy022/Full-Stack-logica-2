
//Desafio 1 é somente baixar o arquivo

//Desafio 2
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio ';


//Desafio 3
function verificarConsole() {
    console.log('O botão foi clicado!');
}

//Desafio 4
function verificarAlert() {
    alert("Eu amo JS");
}

//Desafio 5
function verificarPrompt(){
let cidade= prompt('Escolha uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

//Desafio 6
function verificarSoma(){ 
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}