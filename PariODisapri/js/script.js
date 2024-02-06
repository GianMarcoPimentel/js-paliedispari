/* 
Pari e Dispari
L’utente sceglie pari o dispari.
Inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.
*/

// Utente sceglie pari o dispari 
const sceltaUtente = prompt("Scegli Pari o Dispari ?");

// Utente inserisce un numero da 1 a 5 
const userNumber = Number(prompt("Inserisci un numero da 1 a 5"));

//Genero un numero random(da 1 a 5)per il computer(usando una funzione).

function randomNumber5() {
    const random = Math.floor(Math.random() * 5) + 1;

    return random;
}

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

/* function somma(userNumber, computerNumber){
    return userNumber + computerNumber;
} */
const numero1 = randomNumber();
 
//sommiamo i due numeri
let sum = userNumber + computerNumber;

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pariOdispari(sum){
    if (sum % 2 == 0){
        return pari;
    }  else {
        return dispari;
    }
}


console.log(sum);
