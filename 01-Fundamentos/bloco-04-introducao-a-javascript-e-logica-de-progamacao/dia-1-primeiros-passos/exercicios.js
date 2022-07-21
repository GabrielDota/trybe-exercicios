// exercicio 1
const a = 2;
const b = 1;

let adicao = a + b;
let subtracao = a - b;
let multipicacao = a * b;
let divisao = a / b;
let modulo = a % b;


// exercicio 2
const c = 10;
const d = 15;

if(c > d){
  console.log(c)
}else{
  console.log(d)
}


// exercicio 3
const e = 5;
const f = 6;
const g = 20;

if (e > f && e > g){
  console.log(e)
} else if (f > e && f > g){
  console.log(f)
} else {
  console.log (g)
}


// exercicio 4
const h = -10;

if (h === 0){
console.log("zero")
} else if(h > 0){
  console.log("positive")
} else {
  console.log("negative")
}


// exercicio 5
const anguloA = 90;
const anguloB = 50;
const anguloC = 30;

if (anguloA < 0 || anguloB < 0 || anguloC < 0){
  console.log("erro!");
} else if (anguloA + anguloB + anguloC === 180){
  console.log(true);
}else {
  console.log(false);
}


// exercicio 6
peça = 'Rainha';

switch (peça) {
  case 'Peão':
    console.log("Uma para frente da mesma cor");
    break;

  case 'Cavalo':
    console.log("Em L");
    break;

  case 'Torre':
    console.log("Em linha");
    break;

  case 'Bispo':
    console.log("Em diagonal")
    break;
  
  case 'Rainha':
    console.log("Em qualquer direção")
    break;
  
  case 'Rei':
    console.log("Uma casa, qualquer direção")
    break;

  default:
    console.log("Essa peça não existe, ou digite a letra inicial com maiúsculo")
    break;
};


// exercicio 7
let nota = 100;
let resultado;

if (nota > 100 || nota < 0){
  resultado = "Erro!"
} else if(nota >= 90){
  resultado = "A"
} else if(nota >= 80){
  resultado = "B"
} else if (nota >= 70){
  resultado = "C"
} else if (nota >= 60){
  resultado = "D"
} else if (nota >= 50){
  resultado = "E"
} else if (nota < 50){
  resultado = "F"
}
console.log (resultado)

// exercicio 8
const i = 12, j = 7 , k = 9;
if(i % 2 === 0 || j % 2 === 0 || k % 2 === 0){
  console.log("true");
} else {
  console.log("false");
}


// exercicio 9
const l = 16, m = 8 , n = 11;
if(l % 2 !== 0 || m % 2 !== 0 || n % 2 !== 0){
  console.log("true");
} else {
  console.log("false");
}



// exercicio 10
const valorCusto = 100, valorVenda = 200;
let valorCustoTotal = valorCusto * 1.2;

let calculaLucro1000 = 1000 * (valorVenda - valorCustoTotal);

if(valorCusto < 0 || valorVenda < 0){
  console.log("Erro!")
} else {
  console.log(calculaLucro1000)
}

// exercicio 11
let salarioBruto, salarioBase, calculaSalarioLiquido, aliquotaINSS, IR, aliquotaIR, parcelas;
salarioBruto= 3000

if(salarioBruto <= 1556.94){
  aliquotaINSS = 0.08;
  salarioBase = salarioBruto - (salarioBruto * aliquotaINSS); 
}

else if(salarioBruto < 2594.93){
  aliquotaINSS = 0.09
  salarioBase = salarioBruto - (salarioBruto * aliquotaINSS);
}

else if(salarioBruto < 5189.82){
  aliquotaINSS = 0.11
  salarioBase = salarioBruto - (salarioBruto * aliquotaINSS);
}

else{
  aliquotaINSS = 570,88
  salarioBase = salarioBruto - aliquotaINSS;
}


if(salarioBase <= 1903.98){
  aliquotaIR = 0
} 
else if(salarioBase < 2826.66){
  aliquotaIR = 0.075;
  parcelas = 142.80;
} 
else if(salarioBase < 3751.06){
  aliquotaIR = 0.15;
  parcelas = 354.80;
} 
else if(salarioBase < 4664.69){
  aliquotaIR = 0.225;
  parcelas = 636.13;
} 
else {
  aliquotaIR = 0.275;
  parcelas = 869.36;
}
IR = (salarioBase * aliquotaIR) - parcelas

calculaSalarioLiquido = salarioBase - IR
console.log(calculaSalarioLiquido)
