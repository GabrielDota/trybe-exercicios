let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// exercicio 1
for(i = 0; i < numbers.length; i += 1){
  console.log(numbers[i])
}

// exercicio 2
var somaNumeros = 0;
for(i = 0; i < numbers.length; i += 1){
  somaNumeros += numbers[i];
}
console.log("a soma dos números é", somaNumeros)

//exercicio 3
let quantidade = numbers.length + 1
let mediaAritmetica = somaNumeros / quantidade
console.log("a media é ", mediaAritmetica)

// exercicio 4
if(somaNumeros > 20){
  console.log("valor maior que 20")
} else{
  console.log("valor menor ou igual a 20")
}

// exercicio 5 
let maiorNumero = 0
for(i = 0; i < numbers.length; i += 1){
  if(numbers[i] > maiorNumero){
    maiorNumero = numbers[i];
  }
}
console.log(maiorNumero);

//exercicio 6
let qntsImpares = []
for(i = 0; i < numbers.length; i += 1){
if(numbers[i] % 2 !== 0){
  qntsImpares.push = numbers[i]
}
}

//exercicios 7
let menorNumero = 0
for(i = 0; i < numbers.length; i += 1){
  if(numbers[i] > maiorNumero){
    menorNumero = numbers[i];
  }
}

//exercicios 8
let array = []
for(i = 1; i < 26; i += 1){
  array.push = i;
  
}console.log(array)

//exercicios 9
for(i = 0; i < array.length; i += 1){
  console.log(array[i] / 2)
}