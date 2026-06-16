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
/*14
let valorHora = Number(prompt("qual o valor da sua hora trabalhada"));
let quantidadeHoras = Number(prompt("quantidades de hora trabalhadas:"));
let salario = valorHora * quantidadeHoras
let impostos = 0
let salarioFinal = 0
let inss = salario * 10 / 100
let fgts = salario * 11 / 100
let descontofgts = salario - fgts

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
function questionario() {
let resposta_sim = 0
let resposta_1 = (prompt("voce telefonou para a vitima?(s/n)")).toLowerCase()
let resposta_2 = (prompt("esteve no localdo crime? (s/n)")).toLowerCase()
let resposta_3 = (prompt("mora perto da vitima? (s/n)")).toLowerCase()
let resposta_4 = (prompt("devia para a vitima? (s/n)")).toLowerCase()
let resposta_5 = (prompt("ja trabalhou com a vitima? (s/n)")).toLowerCase()

if(resposta_1 === "s"){
    resposta_sim +=1
}
if (resposta_2 === "s"){
    resposta_sim +=1
}
if(resposta_3 === "s"){
    resposta_sim +=1
}
if(resposta_4 === "s"){
    resposta_sim +=1
}
if(resposta_5 === "s"){
    resposta_sim +=1
}
alert(resposta_sim)
if (resposta_sim >= 5){
    alert("assasino")
}
else if (resposta_sim >= 3){
    alert("cumplice")
}
else if (resposta_sim >= 2){
    alert("suspeita")
}
else {
    alert("inocente")
}

}
questionario()

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