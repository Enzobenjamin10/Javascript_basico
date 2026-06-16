/*1
let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));

if (n1 > n2) {
    alert("Maior: " + n1);
} else {
    alert("Maior: " + n2);
}
*/
/*2
let n = Number(prompt("Digite um número:"));

if (n >= 0) {
    alert("Positivo");
} else {
    alert("Negativo");
}
*/
/*3
let sexo = prompt("Digite F ou M:");

if (sexo == "F") {
    alert("Feminino");
} else if (sexo == "M") {
    alert("Masculino");
} else {
    alert("Sexo inválido");
}
*/
/*4
let letra = prompt("Digite uma letra:");

if (
    letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u"
) {
    alert("Vogal");
} else {
    alert("Consoante");
}
*/
/*5
let nota1 = Number(prompt("Nota 1:"));
let nota2 = Number(prompt("Nota 2:"));

let media = (nota1 + nota2) / 2;

if (media == 10) {
    alert("Aprovado com Distinção");
} else if (media >= 7) {
    alert("Aprovado");
} else {
    alert("Reprovado");
}
*/
/*6
let a = Number(prompt("Número 1:"));
let b = Number(prompt("Número 2:"));
let c = Number(prompt("Número 3:"));
let maior = a;
if (b > maior) {
    maior = b;
}
if (c > maior) {
    maior = c;
}
alert("Maior: " + maior);
*/
/*7
let a = Number(prompt("Número 1:"));
let b = Number(prompt("Número 2:"));
let c = Number(prompt("Número 3:"));
let maior = a;
let menor = a;
if (b > maior) maior = b;
if (c > maior) maior = c;
if (b < menor) menor = b;
if (c < menor) menor = c;
alert("Maior: " + maior + "\nMenor: " + menor);
*/
/*8
let p1 = Number(prompt("Preço 1:"));
let p2 = Number(prompt("Preço 2:"));
let p3 = Number(prompt("Preço 3:"));
let menor = p1;
if (p2 < menor) menor = p2;
if (p3 < menor) menor = p3;
alert("Compre o produto de R$ " + menor);
*/
/*9
let n1 = Number(prompt("Número 1:"));
let n2 = Number(prompt("Número 2:"));
let n3 = Number(prompt("Número 3:"));

let numeros = [n1, n2, n3];

numeros.sort(function(a, b){
    return b - a;
});

alert(numeros.join(" - "));
*/
/*10
let turno = prompt("M, V ou N:");

if (turno == "M") {
    alert("Bom dia!");
} else if (turno == "V") {
    alert("Boa tarde!");
} else if (turno == "N") {
    alert("Boa noite!");
} else {
    alert("Valor inválido");
}
*/
/*11
let salario = Number(prompt("Digite o salário:"));
let percentual;

if (salario <= 280) {
    percentual = 20;
} else if (salario <= 700) {
    percentual = 15;
} else if (salario <= 1500) {
    percentual = 10;
} else {
    percentual = 5;
}

let aumento = salario * percentual / 100;
let novoSalario = salario + aumento;

alert(
    "Salário antes: R$ " + salario +
    "\nPercentual: " + percentual + "%" +
    "\nAumento: R$ " + aumento +
    "\nNovo salário: R$ " + novoSalario
);
*/
/*12
let valorHora = Number(prompt("Valor da hora:"));
let horas = Number(prompt("Horas trabalhadas:"));

let bruto = valorHora * horas;

let ir;

if (bruto <= 900) {
    ir = 0;
} else if (bruto <= 1500) {
    ir = bruto * 0.05;
} else if (bruto <= 2500) {
    ir = bruto * 0.10;
} else {
    ir = bruto * 0.20;
}

let inss = bruto * 0.10;
let sindicato = bruto * 0.03;
let fgts = bruto * 0.11;

let descontos = ir + inss + sindicato;
let liquido = bruto - descontos;

alert(
    "Salário Bruto: R$ " + bruto +
    "\nIR: R$ " + ir +
    "\nINSS: R$ " + inss +
    "\nSindicato: R$ " + sindicato +
    "\nFGTS: R$ " + fgts +
    "\nSalário Líquido: R$ " + liquido
);
*/
/*13
let dia = Number(prompt("Digite um número de 1 a 7:"));

if (dia == 1) {
    alert("Domingo");
} else if (dia == 2) {
    alert("Segunda-feira");
} else if (dia == 3) {
    alert("Terça-feira");
} else if (dia == 4) {
    alert("Quarta-feira");
} else if (dia == 5) {
    alert("Quinta-feira");
} else if (dia == 6) {
    alert("Sexta-feira");
} else if (dia == 7) {
    alert("Sábado");
} else {
    alert("Valor inválido");
}
*/
/*14
let nota1 = Number(prompt("Nota 1:"));
let nota2 = Number(prompt("Nota 2:"));

let media = (nota1 + nota2) / 2;
let conceito;

if (media >= 9) {
    conceito = "A";
} else if (media >= 7.5) {
    conceito = "B";
} else if (media >= 6) {
    conceito = "C";
} else if (media >= 4) {
    conceito = "D";
} else {
    conceito = "E";
}

if (conceito == "A" || conceito == "B" || conceito == "C") {
    alert("Média: " + media + "\nConceito: " + conceito + "\nAPROVADO");
} else {
    alert("Média: " + media + "\nConceito: " + conceito + "\nREPROVADO");
}
*/
/*15
let a = Number(prompt("Lado 1:"));
let b = Number(prompt("Lado 2:"));
let c = Number(prompt("Lado 3:"));

if (a + b > c && a + c > b && b + c > a) {

    if (a == b && b == c) {
        alert("Triângulo Equilátero");
    } else if (a == b || a == c || b == c) {
        alert("Triângulo Isósceles");
    } else {
        alert("Triângulo Escaleno");
    }

} else {
    alert("Não forma um triângulo");
}
*/
/*16
let a = Number(prompt("Valor de A:"));
let b = Number(prompt("Valor de B:"));
let c = Number(prompt("Valor de C:"));

if (a == 0) {

    alert("Não é equação do segundo grau");

} else {

    let delta = (b * b) - (4 * a * c);

    if (delta < 0) {
        alert("Não possui raízes reais");
    } else if (delta == 0) {

        let x = (-b) / (2 * a);

        alert("Raiz única: " + x);

    } else {

        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        alert("x1 = " + x1 + "\nx2 = " + x2);
    }
}
*/
/*17
let ano = Number(prompt("Digite o ano:"));

if (ano % 4 == 0) {
    alert("Ano bissexto");
} else {
    alert("Não é bissexto");
}
*/
/*18
let numero = Number(prompt("Digite um número:"));

if (numero % 2 == 0) {
    alert("Par");
} else {
    alert("Ímpar");
}
*/
/*19
let numero = Number(prompt("Digite um número:"));

if (numero % 2 == 0) {
    alert("Par");
} else {
    alert("Ímpar");
}

if (numero >= 0) {
    alert("Positivo");
} else {
    alert("Negativo");
}
*/
/*20
let pontos = 0;

let p1 = prompt("Telefonou para a vítima? (s/n)");
if (p1 == "s") pontos++;

let p2 = prompt("Esteve no local do crime? (s/n)");
if (p2 == "s") pontos++;

let p3 = prompt("Mora perto da vítima? (s/n)");
if (p3 == "s") pontos++;

let p4 = prompt("Devia para a vítima? (s/n)");
if (p4 == "s") pontos++;

let p5 = prompt("Já trabalhou com a vítima? (s/n)");
if (p5 == "s") pontos++;

if (pontos == 2) {
    alert("Suspeita");
} else if (pontos == 3 || pontos == 4) {
    alert("Cúmplice");
} else if (pontos == 5) {
    alert("Assassino");
} else {
    alert("Inocente");
}
*/
/*21
let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));

if (n1 > n2) {
    alert("Maior: " + n1 + "\nMenor: " + n2);
} else {
    alert("Maior: " + n2 + "\nMenor: " + n1);
}
*/
/*22
let n1 = Number(prompt("Número 1:"));
let n2 = Number(prompt("Número 2:"));
let n3 = Number(prompt("Número 3:"));

let maior = n1;
let menor = n1;

if (n2 > maior) {
    maior = n2;
}

if (n3 > maior) {
    maior = n3;
}

if (n2 < menor) {
    menor = n2;
}

if (n3 < menor) {
    menor = n3;
}

alert("Maior: " + maior + "\nMenor: " + menor);
*/
/*23
let numero = Number(prompt("Digite um número inteiro:"));

if (numero % 2 == 0) {
    alert("O número é PAR");
} else {
    alert("O número é ÍMPAR");
}
*/
/*24
let raio = Number(prompt("Digite o raio da circunferência:"));

let diametro = raio * 2;
let comprimento = 2 * 3.14 * raio;
let area = 3.14 * raio * raio;

alert(
    "Diâmetro: " + diametro +
    "\nComprimento: " + comprimento +
    "\nÁrea: " + area
);
*/
/*25
let idade = Number(prompt("Digite sua idade:"));

if (idade >= 18 && idade <= 67) {
    alert("Pode doar sangue");
} else {
    alert("Não pode doar sangue");
}
*/
/*26
let dia = Number(prompt("Digite o dia:"));
let mes = Number(prompt("Digite o mês:"));
let ano = Number(prompt("Digite o ano:"));

if (ano > 2013) {

    alert("Ano inválido");

} else if (mes < 1 || mes > 12) {

    alert("Mês inválido");

} else if (dia < 1 || dia > 31) {

    alert("Dia inválido");

} else {

    alert("Data válida");

}
*/
/*27
let x = Number(prompt("Digite o valor de x:"));
let y = Number(prompt("Digite o valor de y:"));

alert(
    "Antes da troca:" +
    "\nx = " + x +
    "\ny = " + y
);

let temp = x;
x = y;
y = temp;

alert(
    "Depois da troca:" +
    "\nx = " + x +
    "\ny = " + y
);
*/