//Il computer deve generare 16 numeri casuali tra 1 e 100.I numeri non possono essere duplicati
//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.L’utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//BONUS: (da fare solo se funziona tutto il resto)
//all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
//con difficoltà 0 => tra 1 e 100
//con difficoltà 1 =>  tra 1 e 80
//con difficoltà 2 => tra 1 e 50
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :wink:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve while



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

var userNumbers = [];
console.log(userNumbers);

i = 0;
while (userNumbers.length < (100 - 16)) {
  var insertNumber = Number(prompt("Inserisci un numero da 1 a 100."));

  if (userNumbers.includes(insertNumber)) {
    alert("Numero già inserito in precedenza");
  } else {
    userNumbers.push(insertNumber);
  }

  i++
}


// //Generazione numeri inseriti dall'utente e confronto con numeri casuali del pc
// userNumbers = [];
// console.log(userNumbers);
//
// for (var i = 0; i < (100 - 16); i++) {
//   userNumbers[i] = Number(prompt("Inserisci un numero compreso tra 1 e 100 senza ripetizioni"));
//
//     if (pcNumbers.includes(userNumbers[i])) {
//       alert("Hai perso");
//     } else {
//       alert("Vai avanti");
//     }
//   }
