var numbers = [];

for (var i=0; i<5; i++) {

  number = parseInt(prompt("Inserisci un numero"));
  numbers.push(number);

}

var sum = 0;

/* for (var i=0; i<numbers.length; i++) {

  sum += numbers[i];

} */

//while

document.getElementById('print').innerHTML = sum;