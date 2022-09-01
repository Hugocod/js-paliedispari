/* elementi */
const form = document.getElementById("form");
const rootPalindrome = document.getElementById("result");

/* la funzione si triggera con il submit */
form.addEventListener("submit", (e) => {
    e.preventDefault();
    isPalindrome();
});

/* functions------------------------------------------------------------------------------ */

function isPalindrome() {
    /* Trasformo la stringa inserita dall'utente :
       => in un array di lettere  
       => poi le inverto  
       => poi le concateno per formare una nuova stringa */
    let regularWord = form.elements[0].value;
    let reversedWord = Array.from(regularWord).reverse().join("");

    /*  verifico se la parola inserita è uguale alla sua versione invertita */
    if (regularWord === reversedWord) {
        rootPalindrome.innerHTML = `la parola ${regularWord} è palindroma`;
    } else {
        rootPalindrome.innerHTML = `la parola ${regularWord} NON è palindroma`;
    }
}




function generateRandomNumber(
    
)