// Chiedi all’utente la sua email, 
// controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull’esito del controllo.




// esercizio dadi 
// Generare un numero random da 1 a 6,
//  sia per il giocatore sia per il computer. 
//  Stabilire il vincitore, in base a chi fa il punteggio più alto.

const numeri = [1,2,3,4,5,6];
let user;
let pc;
// creo una funzione che dalla array tiri fuori due numeri casuali 
function estrazione (){
    user =numeri[Math.floor(Math.random() * (numeri.length - 1)) + 1];
    pc = numeri[Math.floor(Math.random() * (numeri.length - 1)) + 1];
    return {user, pc};
}
// funzione del click del bottone 
function start(){
    const numeriCasuali = estrazione();
    console.log("Numero casuale a:", user);
    console.log("Numero casuale b:", pc);
}
// collegamento funzione e bottone 
document.getElementById("start").addEventListener("click", start);

