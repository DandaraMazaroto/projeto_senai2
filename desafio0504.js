//atividade 1
function exibirTextoNoConsole() {
     console.log ('Olá, mundo!');
}

//atividade 2
function exibirTextoNoConsole(texto){
    let nome = prompt ('digite aqui seu nome');
    cosnsole.log (`Olá, ${nome}`);
}

//atividade 3
n = parseInt(prompt("digite um numero"));
let resultado = conta(n);
function cont(num){
         return (num*2);
}
alert (`o dobro de ${n} é ${resultado}`);

//atividade 4
let num = 5;
let num2 = 5;
let num3 = 5;
let media = 0;
 
function Numeros() {
    media = (num + num2 + num3) / 3;
    return media;
}
let resultadoMedia = Numeros();
console.log(resultadoMedia)

//atividade 5
let num1 = parseInt(prompt("Digite um número"));
let num2_ = parseInt(prompt("Digite um número"));
 
function Maior() {
    if (num1 > num2_) {
        return `O ${num1} é maior que ${num2_}`;
    } else {
        return `O ${num1} é menor que ${num2_}`;
    }
}
 
let _resultado = Maior();
console.log(_resultado);

//atividade 6
let num1_ = parseInt(prompt("Digite um número"));
let numero;
 
function mult() {
    numero = num1_ * num1_;
    return numero;
}
 
let resultado_ = mult();
console.log(resultado_)