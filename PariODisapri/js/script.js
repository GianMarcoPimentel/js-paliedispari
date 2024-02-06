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
let sceltaUtente ;
do{
    sceltaUtente = prompt("Scegli Pari o Dispari ?");

    if(sceltaUtente != "Pari" && sceltaUtente != "Dispari" ){
        alert("Ricarica la pagina e Inserisci la parola corretta")
    
    }
} while(sceltaUtente != "Pari" && sceltaUtente != "Dispari" );

// Utente inserisce un numero da 1 a 5 
let userNumber;
do{
     
    userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
/*     document.getElementById("#numero-utente").innerHTML = `Il numero scelto dall'utente è ${userNumber}`;
 */    if(userNumber < 1 || userNumber > 5 || isNaN(userNumber) ){
        alert("Ricarica la pagina e Inserisci il numero nel range corretto")
    }

} while(userNumber < 1 || userNumber > 5 || isNaN(userNumber));

//Genero un numero random(da 1 a 5)per il computer(usando una funzione).

function randomNumber5() {
    const random = Math.floor(Math.random() * 5) + 1;

    return random;
}
let numero1 = randomNumber5();

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

//sommiamo i due numeri
let sum = userNumber + numero1;

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pariOdispari(sum){
    if (sum % 2 == 0){
        return "Pari";
    }  else {
        return "Dispari";
    }
}

let risultato = pariOdispari(sum);

if(sceltaUtente == risultato){
    document.getElementById("finish").innerHTML = `Hai scelto ${sceltaUtente}, e la somma dei due numeri è ${risultato}. Hai vinto`
} else {
    document.getElementById("finish").innerHTML = `Hai scelto ${sceltaUtente}, ma la somma dei due numeri è ${risultato}. Hai perso`

}