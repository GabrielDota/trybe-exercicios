//exercicio 1 
let resultado = 1, fatorial, multiplica
fatorial = 10
for (let i = 1; i <= fatorial; i += 1) {
  multiplica = resultado * i
  resultado = multiplica
  console.log(resultado)
}

//exercicio 2
let word = 'tryber';
/* criar uma variavel que armaze a string ao contrario
abrir loop for começando do final e indo até o começo
*/

let inverte = ''


//exercicio 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
/* criar variavel com a maior string
criar loop for
criar variaveeis para armazenar as strings
loop for dentro de for
atribuir às variaveis os elementos do array
comparar cada um
se for maior compara com o tamanho  da maior string
se for maior adiciona */

let maiorString = '', string1, string2

for (i = 0; i < array.length; i += 1) {
  string1 = array[i]
  for (j = 0; j < i; j += 1) {
    string2 = array[j]
    if(string1.length > string2.length
      ){
      if(string1.length > maiorString.length){
        maiorString = string1;
      }
    }
  }
} console.log("A maior string é " + maiorString)

let menorString = ''
for (i = 0; i < array.length; i += 1) {
  string1 = array[i]
  for (j = 0; j < i; j += 1) {
    string2 = array[j]
    if(string1.length < string2.length
      ){
      if(string1.length < maiorString.length){
        menorString = string1;
      }
    }
  }
} console.log("A menos string é " + menorString)

// exercicio 4
/*criar variavel pra saber o limite = qntsPrimos
criar um array resultado para saber quais são os numeros primos
abrir loop for com limite na variavel qntsPrimos
criar variavel para armazenar quantos divisores
fazer loop dentro de loop
criar a variavel divisor
cada vez que o numero for divisor adicionar a contagem
se a contagem for 2, ele é um numero primo
adiciona esse numero no array resultado
compara pra saber qual é o maior numero primo entre eles*/

let qntsPrimos = 50;
let primos = [];
let maiorPrimo = 

for (let index = 2; index <= qntsPrimos; index += 1) {
  let qntsDivisores = 0
  for (let divisor = 1; divisor >= index; divisor += 1) {
    if(index % divisor === 0){
      qntsDivisores += 1;
    }
    if(qntsDivisores === 2){
      array.push(index);
    }
  }
}

for (let index = 0; index < array.length; index += 1) {
  for (let j = 0; j >= i; j++) {
    const element = array[j];
    
  }
}