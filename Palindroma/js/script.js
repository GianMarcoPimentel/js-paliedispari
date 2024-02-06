/* 
Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma
(ad esempio, questa funzione potrebbe funzionare così: passandole la parola come parametro, farà i suoi calcoli per capire se è palindroma o meno e ci restituirà true o false in base all'esito)
ATTENZIONE :
No .reverse, .split e .join
*/

// chiedere all'utente una parola
let parola = prompt("Inserisci una parola")

// creo una funzione
//palindorma vuol dire che contiene la stessa sequenza di caratteri.
function palindroma(parola){
    // Se un carattere non corrisponde al carattere nell'altra metà: NON palindroma
    for(i=0; i < parola.length / 2; i++){
        if(parola[i] !== parola[parola.length -i -1]){
            return false;
        }
    }
    // Parola è palindroma
    return true;
}

let risultato = palindroma(parola);

document.getElementById("risultato").innerHTML = `${risultato}`;
