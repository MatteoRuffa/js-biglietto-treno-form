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

let elUserName = document.getElementById('user-name');

let elUserKilometers = document.getElementById('user-kilometers');

let elUserAge = document.getElementById('user-age');

/* DOVE SI ATTIVERÀ LA FUNZIONE */
let elButton = document.querySelector('.btn.btn-primary');

const elTicket = document.querySelector('.ticket')

/*  ATTIVARE AL CLICK! */
elButton.addEventListener('click', function(){
    /* DOVE ANDRÒ A 'STAMPARE' */
    const elTicketUserName = elUserName.value;
    document.querySelector('.ticket-user-name').innerHTML = elTicketUserName
    const elTicketType = elUserAge.value;
    document.querySelector('.ticket-type').innerHTML = `Biglietto ${elTicketType}`


    let elTicketPlace = Math.floor(Math.random() * (14 - 0 + 1)) + 0;
    document.querySelector('.ticket-place').innerHTML = `${elTicketPlace}`

    let elTicketCP =  Math.floor(Math.random() * (100000 - 90000 + 1)) + 90000;
    document.querySelector('.ticket-CP').innerHTML = `${elTicketCP}`

    let elTicketPrice = elUserKilometers.value * priceKilometers;

    if(elUserAge.value === "senior") {
        elTicketPrice -= elTicketPrice * discountSenior;
        console.log(elTicketPrice.toFixed(2));
        document.querySelector('.ticket-price').innerHTML = `${elTicketPrice.toFixed(2)} &euro;`
    } else if(elUserAge.value === "junior") {
        elTicketPrice -= elTicketPrice * discountJunior;
        console.log(elTicketPrice.toFixed(2));
        document.querySelector('.ticket-price').innerHTML = `${elTicketPrice.toFixed(2)} &euro;`
    } else {
        elTicketPrice 
        console.log(elTicketPrice.toFixed(2));
        document.querySelector('.ticket-price').innerHTML = `${elTicketPrice.toFixed(2)} &euro;`
    }
    console.log(elTicketUserName, elTicketType);

    elTicket.className = 'card ' + ' m2' + ' ticket' ;
});

let elButtonReset = document.getElementById('reset');

elButtonReset.addEventListener('click', function(){
    const elTicketUserName = elUserName;
    console.log(elTicketUserName);
});    