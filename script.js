// Chiedi all’utente la sua email, 
// controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull’esito del controllo.




// esercizio dadi 
// Generare un numero random da 1 a 6,
//  sia per il giocatore sia per il computer. 
//  Stabilire il vincitore, in base a chi fa il punteggio più alto.

// dichiariamo i numeri 
const numeri = [1,2,3,4,5,6];
// stampiamo un numero per il giocatore alla pressione di un bottone 
    // creo la funzione che stampa il numero al click del bottone
    function tiro(){
    const estrazione = Math.floor(Math.random()* numeri.length);
    return numeri[estrazione];
  
    }
    const estratto = tiro(numeri);
    // funzione per gestire i click per iniziare 
    function start(){
        const genera = tiro(numeri)
        console.log("numero user:", genera);

    }
    // collegamento bottone e funzione start 
    document.getElementById("start").addEventListener("click", function(){
        start();
    });

    // adesso replico la stessa cosa per il tiro dell computer 
    function pc(){
        const generaPc = tiro(numeri)
        console.log("numero pc:", generaPc);

    }
    // collegamento bottone e funzione start 
    document.getElementById("pc").addEventListener("click", function(){
        pc();
    });
    // ora deve avvenire un confronto tra i due numeri 

    if (genera > generaPc){
        // stampare la che l'utente ha vinto 
    }else if(genera < generaPc){
        // ha vinto il pc 
    }else{
        // stampare il pareggio 
    }