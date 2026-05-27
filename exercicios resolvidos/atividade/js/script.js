// 1
let num1 = 10;
let num2 = 5;
console.log("Soma:", num1 + num2);
console.log("Subtração:", num1 - num2);
console.log("Multiplicação:", num1 * num2);
console.log("Divisão:", num1 / num2);

// 2.
let numero = 8;
console.log("É par?", numero % 2 == 0);

// 3.
let valor = 3;
console.log("Quadrado:", valor ** 2);
console.log("Cubo:", valor ** 3);

// 4.
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log("Fahrenheit:", fahrenheit);

// 5.
let nota1 = 7;
let nota2 = 8;
let nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3;
console.log("Média:", media.toFixed(2));

// 6.
let preco = 35;
let pago = 50;
let troco = pago - preco;
console.log("Troco:", troco);

// 7.               
let a = 10;
let b = "10";
console.log(a == b);
console.log(a === b);

// 8.
let n1 = 15;
let n2 = 20;
console.log("Maior:", n1 > n2);
console.log("Menor:", n1 < n2);

// 9.
let nota = 8;
console.log("Aprovado?", nota >= 7);

// 10.
let idade = 18;
console.log("Maior de idade?", idade >= 18);

// 11.
let texto1 = "JavaScript";
let texto2 = "javascript";
console.log(texto1 == texto2);
console.log(texto1 != texto2);

// 12.
let produto = 50;
console.log(produto >= 10 && produto <= 100);

// 13.
let numeroPar = 8;
console.log(numeroPar > 0 && numeroPar % 2 == 0);

// 14.
let usuario = "admin";
console.log(usuario == "admin" || usuario == "root");

// 15.
let logado = true;
console.log(!logado);

// 16.
let idadeUsuario = 20;
let email = "teste@gmail.com";
console.log(idadeUsuario > 18 && email != "");

// 17.
let assinante = false;
let totalCompra = 250;
console.log(assinante || totalCompra > 200);

// 18.
let maiorIdade = true;
let contaAtiva = true;
let banido = false;
console.log(maiorIdade && contaAtiva && !banido);

// 19.
let numeroTeste = 40;
console.log(
  numeroTeste % 2 == 0 &&
  numeroTeste >= 1 &&
  numeroTeste <= 100
);

// 20.
let notaAluno = 8;
console.log("Nota:", notaAluno);
console.log("Excelente:", notaAluno >= 9);
console.log("Aprovado:", notaAluno >= 7);
console.log("Recuperação:", notaAluno >= 5);
console.log("Reprovado:", notaAluno < 5);

// 21.
let peso = 70;
let altura = 1.75;
let imc = peso / (altura ** 2);
console.log("IMC:", imc.toFixed(2));
console.log("Abaixo do peso:", imc < 18.5);
console.log("Normal:", imc >= 18.5 && imc < 25);
console.log("Sobrepeso:", imc >= 25 && imc < 30);
console.log("Obesidade:", imc >= 30);

// 22.
let numeroSecreto = 42;
let palpite = 30;
console.log("Acertou?", palpite == numeroSecreto);
console.log("Palpite maior?", palpite > numeroSecreto);
console.log("Palpite menor?", palpite < numeroSecreto);