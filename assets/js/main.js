//Generazione di 16 numeri casuali per il pc ("bombe" che fanno perdere l' utente)
var pcNumbers = [];
console.log(pcNumbers);

i = 0;
while (pcNumbers.length < 16) {
  var randomNumber = Math.floor(Math.random() * 100 ) + 1;

  if (pcNumbers.includes(randomNumber)) {
  } else {
    pcNumbers.push(randomNumber);
  }

  i++
}

//Faccio sì che l'utente possa inserire dei numeri da 0 a 100 senza ripetersi.

var userNumbers = [];
console.log(userNumbers);

i = 0;
while (userNumbers.length < (100 - 16)) {
  var insertNumber = Number(prompt("Inserisci un numero da 1 a 100."));

  if (userNumbers.includes(insertNumber)) {
    alert("Numero già inserito in precedenza");
  } else {
    userNumbers.push(insertNumber);

// Creo una if che imposti la condizione per andare avanti, perdere o vincere il gioco quando il numero inserito dall'utente è valido (Cioé se non si ripete)

    if (pcNumbers.includes(insertNumber)) {
      alert("Hai perso!!!!!!! " + "Il tuo punteggio è " + (userNumbers.length - 1));
      location.reload();
    } else if (userNumbers.length == (100 - 16)) {
      alert("Complimenti! Hai vinto il gioco");
    }else {
      alert("Non hai beccato la bomba, puoi andare avanti");
    }

  }

  i++
}
