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

//memorizzo una variabile per la scelta di pari o dispari fuori dal ciclo do-while
let sceltaUtente ;
//introduco il ciclo do-while
//perchè voglio far si che il computer continui a chiedere all'utente :
//di inserire Pari o Dispari finchè l'inserimento non è corretta
do{
    sceltaUtente = prompt("Scegli : Pari o Dispari ?");

    if(sceltaUtente != "Pari" && sceltaUtente != "Dispari" ){ 
        // nella condizione devo dichiarare che se la parola sia diversa sia da Pari che da Dispari
    alert("Ricarica la pagina e Inserisci la parola corretta");ì
    
    }
} while(sceltaUtente != "Pari" && sceltaUtente != "Dispari" ); //condizione per uscire dal ciclo

// Utente inserisce un numero da 1 a 5 

//memorizzo una variabile per la scelta del numero da parte dell'utente
let userNumber;
//introduco il ciclo do-while
//perchè voglio far si che il computer continui a chiedere all'utente :
//di inserire un numero finchè l'inserimento non è corretta
do{
     
    userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
/*     document.getElementById("#numero-utente").innerHTML = `Il numero scelto dall'utente è ${userNumber}`;
 */    if(userNumber < 1 || userNumber > 5 || isNaN(userNumber) ){
      //verifiche il numero sia realmente un nuemro e compreso tra 1 e 5
        alert("Ricarica la pagina e Inserisci il numero nel range corretto")
    }

} while(userNumber < 1 || userNumber > 5 || isNaN(userNumber)); //condizione per uscire dal ciclo

//Genero un numero random(da 1 a 5)per il computer(usando una funzione).
function randomNumber5() {
    const random = Math.floor(Math.random() * 5) + 1;

    return random;
}
let numero1 = randomNumber5(); //memorizzo il numero randomico in una variabile

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

let risultato = pariOdispari(sum); // memorizza se la somma è pari o dispari in una variabile


// verifico se la scelta iniziale dell'utente tra Pari o Dispari era corretta!
// scrivo se ha vinto o ha perso
if(sceltaUtente == risultato){
    document.getElementById("finish").innerHTML = `Hai scelto ${sceltaUtente}, e la somma dei due numeri è ${risultato}. Hai vinto`
} else {
    document.getElementById("finish").innerHTML = `Hai scelto ${sceltaUtente}, ma la somma dei due numeri è ${risultato}. Hai perso`

}