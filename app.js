//atividade 1
let texto = document.querySelector('h1');
texto.innerHTML = 'Hora do Desafio!';

//atividade 2 
function exibirTextoNoConsole(){
    console.log ("O botão foi clicado");
}

//atividade 3 
function mensagemAlert(){
    alert ('Eu amo JS');
}

//atividade 4
let cidade 
function informaçãoPrompt(){
    cidade = prompt ("Escolha o nome de uma cidade do Brasil");
    alert (`Estive em ${cidade} e lembrei de você`);
}

//atividade 5
let número; 
let número2; 
let resultado;
function botãoSoma(){
    número = parseInt(prompt("escolha o primeiro número da soma:"));
    número2 = parseInt(prompt("escolha o segundo número da conta:"));
    resultado = (número+número2);
    alert (`o resultado da conta é ${resultado}`);
}