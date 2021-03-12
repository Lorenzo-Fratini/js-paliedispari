function es1(){

  function isPalindrom(str){
    var reverseStr = str.split( '' ).reverse( ).join( '' );

    // trasforma la stringa in un array di caratteri
    // var strArr = str.split( '' );

    // inverte l'ordine degli elementi dell'array
    // var strArrRev = strArr.reverse( );

    // trasforma gli elementi dell'arrey in una stringa concatenandoli
    // var reverseStr = strArrRev.join( '' );

    if (str == reverseStr){
      return true;
    } else {
      return false;
    }
  }

  var str = 'aba';
  var string = isPalindrom(str);

  if(string){
    console.log(str + ' è palindromo');
  } else {
    console.log(str + ' non è palindromo');
  }
}

function es2(){

  // Numero random tra max e min
  function getRnd(min, max){

  var minRnd = min;
  var maxRnd = max - minRnd + 1;

  var rnd = parseInt(Math.floor(Math.random() * maxRnd) + minRnd);
  return rnd;
  }

  // Verifico se il numero è pari o dispari
  function isEven(value){
    if (value % 2 == 0){
      return true;
    } else {
      return false;
    }
  }

  var oddEven = prompt('Scegli pari o dispari');

  if (oddEven == 'pari' || oddEven == 'dispari'){

    var num = parseInt(prompt('Scegli un numero tra 1 e 5'));

    if (num > 5 || num < 1){
      alert('dato non valido, ricaricare la pagina')
    }

  } else {
    alert('dato non valido, ricaricare la pagina')
  }

  var rnd = getRnd(1, 5);
  var sum = num + rnd;

  var sumIsEven = isEven(sum);

  console.log('scelta utente ' + oddEven);
  console.log('numero utente ' + num);
  console.log('numero random ' + rnd);
  console.log('somma ' + sum);
  console.log(sum + ' è pari ' + sumIsEven);

  if (sumIsEven && oddEven == 'pari') {
    console.log('Hai vinto');
  } else if (sumIsEven == false && oddEven == 'dispari') {
    console.log('Hai vinto');
  } else {
    console.log('Hai perso');
  }
}

// es1();
es2();
