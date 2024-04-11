// //atividade 1
// let altura = parseFloat(prompt("Digite sua altura"));
// let peso = parseFloat(prompt("Digite seu peso"));

// function calcularIMC(parAltura, parPeso){
//     return parPeso/(parAltura*parAltura);
// }

// let valorIMC = calcularIMC(altura, peso);
// alert (`O valor do seu IMC é: ${valorIMC.toFixed(2)}`);

// //atividade 2 
// let numero = parseInt(prompt("Digite um número"));
// let fatorial = 1

// function calcularFatorial(parNumero){
//     if (parNumero == 1 || parNumero == 0){
//         return 1;
//     }
//     else{
//         while (parNumero > 1){
//             fatorial *= parNumero;
//             parNumero--;
//         }
//     }
//     return fatorial; 
// }

// let resultado = calcularFatorial
// alert (`O fatorial do número ${numero} é ${resultado}`);

// //atividade 3
// let valor = parseFloat(prompt("Digite sua quantidade em dólar que deseja:"));
// let dolar = 4.80;

// function conversaoDolar(parValor){
//     return parValor*dolar;
// }

// let valorReal = conversaoDolar(valor);
// alert (`O valor de US${valor} corresponde a R$${valorReal.toFixed(2)}`);

// //atividade 4
// let altura = parseFloat(prompt("Digite a altura do retângulo"));
// let largura = parseFloat(prompt("Digite a largura do retângulo"));

// function calcularPerimetro(parAltura, parLargura){
//     return (parAltura*2) + (parLargura*2);
// }

// let area = calcularArea (altura, largura);
// let perimetro = calcularPerimetro (altura, largura);

// //atividade 5 
// let raio = parseFloat(prompt("Digite o valor do raio do seu círculo"));
// let po = 3.14;

// function calcularArea(parRaio){
//     return (2*parRaio);
// }

// area = calcularArea(raio);
// perimetro = calcularPerimetro(raio);
// alert (`A área do círculo é de ${area} e o seu perimetro é ${perimetro}`);

// //atividade 6
// let numero = parseInt(prompt("Digite um número inteiro para calcular a tabuada"));

// function calcularTabuada(parNumero){
//     for (let i=0; i<=10; i++){
//         console.log(`${parNumero} X ${i} = ${parNumero*i}`);
//     }
// }

// calcularTabuada(numero);
