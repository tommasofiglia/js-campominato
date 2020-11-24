/*********** SPIEGAZIONE DI QUANTO SEGUE **************

Sotto ho creato e poi utilizzato quattro funzioni diverse.

La prima funzione, che ho chiamato "selectionModality", è una funzione in grado di far scegliere all'utente tra le 3 difficoltà e , attraverso uno switch-case , permette di avviare le due funzioni che permettono rispettivamente l'estrazione dei numeri randomici per il pc ( = bombe) e la scelta dei numeri da parte dell'utente.

La seconda è la funzione che ho nominato "verifyInArray", in grado di verificare se un dato numero sia presente o meno in un array. Questa serve per riconoscere la presenza del numero inserito dall'utente nell'array dei numeri già scelti (evitando che l'utente scelga due volte lo stesso numero) e poi per evitare che ci siano dei numeri che si ripetono nell'array di 16 numeri Randomici generati dal pc.

La terza funzione ("randomPcNumbers") invece gestisce la creazione dei 16 numeri randomici per il pc, mentre la quarta ("gameCampoMinato") l'inserimento del numero da parte dell'utente e il confronto di esso con l'array contenente le "bombe".
Ho diviso questa parte di codice js in due funzioni diverse anche se avrei potuto crearne una sola avente "maxnumber" come argomento. Ho fatto ciò per una questione di ordine nel mio ragionamento personale e per tenermi allenato con le funzioni.

****************************************************/

//Funzione che permette all'utente di scegliere la difficoltà

function selectionModality(valuecase0 ,valuecase1 , valuecase2) {

  var modality = Number(prompt('Scrivi 0 per la modalità a 100 numeri ( Facile ), 1 per quella a 80 numeri ( Media ) e 2 per quella a 50 numeri ( Difficile ) '))

  //Switch-case che trasforma la scelta dell'utente (0, 1, 2) in 3 case , ognuno dei quali fa partire le due funzioni "randomPcNumbers" e "gameCampoMinato", le quali avranno come argomento 100, 80 o 50 al posto degli argomenti "valuecase". I valori 100, 80 e 50, verranno inseriti come argomento quando la funzione sarà richiamata

  switch (modality) {
    case 0:
    randomPcNumbers(valuecase0);
    gameCampoMinato(valuecase0);
    break;
    case 1:
    randomPcNumbers(valuecase1);
    gameCampoMinato(valuecase1);
    case 2:
    randomPcNumbers(valuecase2);
    gameCampoMinato(valuecase2);
    default:
    alert("Devi inserire un numero compreso tra 0 e 2 !");
    location.reload();
  }

}

selectionModality(100 ,80 ,50 ); //uso di "selectionModality"

//Creo una funzione che verifichi la presenza di un numero in un determinato array.

function verifyInArray(array, number) {
   var i = 0;
   while ( i < array.length) {
     if (number === array [i]) {
       return true;
     }
     i++;
   }
}

//Creo una funzione che generi 16 numeri casuali che vadano da 1 al numero scelto dall'utente (in base alla difficoltà) per il pc ( sono le "bombe" che fanno perdere l' utente)


function randomPcNumbers(maxnumber) {

  pcNumbers = [];
  console.log(pcNumbers);

  i = 0;
  while (pcNumbers.length < 16) {
    var randomNumber = Math.floor(Math.random() * maxnumber) + 1;

    if (! verifyInArray(pcNumbers, randomNumber)) { //uso di "verifyInArray"
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

    if (verifyInArray(userNumbers, insertNumber)) { //uso di "verifyInArray"
      alert("Numero già inserito in precedenza");
    } else if ((insertNumber > maxnumber) || (insertNumber === 0)) {
      alert("Devi inserire un numero compreso tra 1 e " + maxnumber + "!");
    } else if (isNaN(insertNumber)) {
      alert("Quello che hai inserito non è un valore numerico");
    } else {
      userNumbers.push(insertNumber);

      // Creo una if che imposti la condizione per andare avanti, perdere o vincere il gioco quando il numero inserito dall'utente è valido (Cioé se non si ripete)

      if (pcNumbers.includes(insertNumber)) {
        alert("Hai perso!!! " + "Il tuo punteggio è di " + (userNumbers.length - 1) + " numeri inseriti prima di trovare la bomba!");
        selectionModality(100 ,80 ,50); //uso di "selectionModality" per fare ripartire il gioco
      } else if (userNumbers.length == (maxnumber - 16)) {
        alert("Complimenti! Hai vinto il gioco con un punteggio di " + (userNumbers.length) + " numeri inseriti !!");
        selectionModality(100 ,80 ,50); //uso di "selectionModality" per fare ripartire il gioco
      } else {
        alert("Non hai beccato la bomba, puoi andare avanti");
      }

    }

    i++
  }

}
