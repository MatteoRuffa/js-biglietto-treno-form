/*
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di 
viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due
input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo 
un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo 
finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi
sul prezzo). Questo richiederà un minimo di ricerca.

VARIABILI:
- Nome passeggero
- Il numero di chilometri da percorrere
- Età del passeggero
*/

/* DEFINIZIONE VARIABILI */
/* constanti */
const priceKilometers = 0.21;
const discountJunior = 20 / 100;
const discountSenior = 40 / 100;
//console.log(priceKilometers, discountJunior, discountSenior);

let elUserName = document.getElementById('user-name');

let elUserKilometers = document.getElementById('user-kilometers');

let elUserAge = document.getElementById('user-age');

/* DOVE SI ATTIVERÀ LA FUNZIONE */
let elButton = document.querySelector('.btn.btn-primary');
//console.log(elUserName, elUserKilometers, elUserAge, elButton);

//console.log(elTicket);

/*  ATTIVARE AL CLICK! */
elButton.addEventListener('click', function(){
    console.log('hai cliccato il bottone');

    /* DOVE ANDRÒ A 'STAMPARE' */
    const elTicketUserName = elUserName.value;

    const elTicketType = elUserAge.value;
    // DA PRENDERE CASUALE SOTTO
    // let elTicketPlace = ;
    // DA PRENDERE CASUALE SOTTO
    // let elTicketCP = ;
    let elTicketPrice = elUserKilometers.value * priceKilometers;

    if(elUserAge.value === "senior") {
        elTicketPrice -= elTicketPrice * discountSenior;
        console.log(elTicketPrice.toFixed(2));
    } else if(elUserAge.value === "junior") {
        elTicketPrice -= elTicketPrice * discountJunior;
        console.log(elTicketPrice.toFixed(2));
    } else {
        let elTicketPrice = elUserKilometers.value * priceKilometers;
        console.log(elTicketPrice.toFixed(2));
    }
     
    console.log(elTicketUserName, elTicketType);





});