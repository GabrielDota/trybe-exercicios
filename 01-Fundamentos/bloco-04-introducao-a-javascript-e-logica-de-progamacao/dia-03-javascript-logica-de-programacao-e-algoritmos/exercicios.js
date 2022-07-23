//exercicio 1 
let resultado = 1, fatorial, multiplica
fatorial = 10
for (let i = 1; i <= fatorial; i += 1) {
  multiplica = resultado * i
  resultado = multiplica
}

//exercicio 2
let word = 'tryber';
/* criar uma variavel que armaze a string ao contrario
abrir loop for começando do final e indo até o começo
*/

let inverte = ''


//exercicio 3
let array = ['java', 'javascript', 'python', 'html', 'ablublubleeee', 'css'];
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
}