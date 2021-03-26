// Crea due tag div con due id diversi.
// Un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// 1) Creo un array di numeri
var numeri = [7, 20, 19, 3, 6, 11, 8, 24];

//separazionePariDispari(numeri);

// Funzione separazionePariDispari
// Partendo da un array di numeri li divide fra pari e dispari e li stampa in pagina
//
// arrayNumeri -> un array di numeri interi
function separazionePariDispari(arrayNumeri) {
    // 2) Creo un ciclo per iterare i singoli numeri presenti nell'array
    for(var i = 0; i < arrayNumeri.length; i++) {

        var testo = arrayNumeri[i] + '<br>';

        // 3) Verifico quali numeri sono pari e quali sono dispari
        var numeroPari = isEven(arrayNumeri[i]);
        if(numeroPari == true) {

            // 4) Stampo in pagina i numeri
            printInPage('green', testo);
        } else {

            // 4) Stampo in pagina i numeri
            printInPage('red', testo);
        }
    }
}

// Funzione printInPage
// Inserisce in punti specifici del codice HTML la stringa che gli passo
//
// id -> ID dell'elemento in cui scrivere
// text -> Il testo da scrivere
function printInPage(id, text) {
    var content = document.getElementById(id).innerHTML;
    content = content + text;
    document.getElementById(id).innerHTML = content;
}

// Funzione isEven
// Controllo se un numero è pari o dispari
//
// numero -> un numero intero
// return -> true se numero è pari, false se numero è dispari
function isEven(numero) {
    var risultato = false;
    if(numero % 2 == 0) {
        risultato = true;
    }
    return risultato;
}

// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// 1) Creo un array vuoto

// 2) Chiedo un numero da inserire nell'array

// 3) Controllo che la somma degli elementi sia minore di 50, in quel caso continuo con lo step 2

var listaNumeri = [];
var somma = 0;

while(somma < 50) {
    var numeroUtente = prompt('Inserisci un numero');
    var numeroUtenteAsNumber = parseInt(numeroUtente);

    listaNumeri.push(numeroUtenteAsNumber);
    somma += numeroUtenteAsNumber;
}

printInPage('sum', somma);
separazionePariDispari(listaNumeri);