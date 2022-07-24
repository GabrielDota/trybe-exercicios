let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(i = 0; i < numbers.length; i += 1){
  for(j = 0; j < i; j += 1){
    if(numbers[i] < numbers[j]){
      let position = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}
console.log(numbers)


for(i = 0; i < numbers.length; i += 1){
  for(j = 0; j < i; j += 1){
    if(numbers[i] > numbers[j]){
      let position = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}
console.log(numbers)