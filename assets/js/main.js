//Creo un prompt che faccia scegliere all'utente la difficoltà
var modality = Number(prompt('Scrivi 0 per la modalità a 100 numeri ( Facile ), 1 per quella a 80 numeri ( Media ) e 2 per quella a 50 numeri ( Difficile ) '))

//Creo uno switch case che sfrutti le tre condizioni date attraverso il prompt sopra applicando le funzioni presenti sotto attraverso il cambio dell'argomento "maxnumbers".

switch (modality) {
  case 0:
    randomPcNumbers(100);
    gameCampoMinato(100);
    break;
  case 1:
    randomPcNumbers(80);
    gameCampoMinato(80);
  case 2:
    randomPcNumbers(50);
    gameCampoMinato(50);
  default:
    location.reload();
}

/*********** SPIEGAZIONE DI QUANTO SEGUE **************
Sotto ho creato due funzioni diverse. La prima gestisce la creazione dei 16 numeri randomici per il pc, la seconda l'inserimento del numero da parte dell'utente e il confronto di esso con i numeri presenti nell'array dei numeri generati casualmente dal pc.
Ho diviso questo codice in due funzioni diverse anche se avrei potuto crearne una sola avente "maxnumber" come argomento. Ho fatto ciò per una questione di ordine nel mio ragionamento personale e per tenermi allenato con le funzioni.
****************************************************/


//Creo una funzione che generi 16 numeri casuali che vadano da 1 al numero scelto dall'utente (in base alla difficoltà) per il pc ( sono le "bombe" che fanno perdere l' utente)


function randomPcNumbers(maxnumber) {

  pcNumbers = [];
  console.log(pcNumbers);

  i = 0;
  while (pcNumbers.length < 16) {
    var randomNumber = Math.floor(Math.random() * maxnumber) + 1;

    if (pcNumbers.includes(randomNumber)) {
    } else {
      pcNumbers.push(randomNumber);
    }

    i++
  }
}


//Creo una funzione che faccia sì che l'utente possa inserire dei numeri da 1 al numero pari alla difficoltà scelta. Ho fatto sì che l'utente non potesse inserire due volte lo stesso numero.


function gameCampoMinato(maxnumber) {

  userNumbers = [];
  console.log(userNumbers);

  i = 0;
  while (userNumbers.length < (maxnumber - 16)) {
    var insertNumber = Number(prompt("Inserisci un numero da 1 a " + maxnumber));

    if (userNumbers.includes(insertNumber)) {
      alert("Numero già inserito in precedenza");
    } else if ((insertNumber > maxnumber) || (insertNumber === 0)) {
      alert("Devi inserire un numero compreso tra 1 e " + maxnumber + "!");
    } else {
      userNumbers.push(insertNumber);

      // Creo una if che imposti la condizione per andare avanti, perdere o vincere il gioco quando il numero inserito dall'utente è valido (Cioé se non si ripete)

      if (pcNumbers.includes(insertNumber)) {
        alert("Hai perso!!! " + "Il tuo punteggio è " + (userNumbers.length - 1));
        location.reload();
      } else if (userNumbers.length == (maxnumber - 16)) {
        alert("Complimenti! Hai vinto il gioco");
        location.reload();
      } else {
        alert("Non hai beccato la bomba, puoi andare avanti");
      }

    }

    i++
  }

}
