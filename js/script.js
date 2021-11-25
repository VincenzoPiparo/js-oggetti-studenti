// ISTRUZIONI

// [V] Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// [V] Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// [V] Creare un array di oggetti di studenti.
// [V] Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// [V] Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.



// ---------------------------------------------------------------------
// ESEMPIO DI ARRAY DA FARE DOPO
// const studentData = {
//     nome: 'Vincenzo',
//     cognome: 'Piparo',
//     eta: 24,
// }
// const array = [

// ]


// 1 Come prima cosa dobbiamo creare un "OGGETTO" che ci permetta di descrivere lo studente
    // SOTTO SEZIONI PUTNO 1
        // Creazione oggetto:
        const studentOne = {
            name: 'Vincenzo',
            sureName: 'Piparo',
            age: 24,
        }

// 2 Attraverso un ciclo FOR-IN stampare tutte le propietà dell'oggetto
    // SOTTO SEZIONI PUTNO 2
        // Creazione ciclo FOR-IN:
        for (const key in studentOne) {
            console.log(studentOne[key])
        }

// 3 Creare un array di oggetti di studente
        // SOTTO SEZIONI PUNTO 3
        // Creiamo l'array:
        const studentData = [
            {
                name: 'Alessio',
                sureName: 'Crea',
                age: 23
            },

            {
                name: 'Luca',
                sureName: 'Rossi',
                age: 32
            },

            {
                name: 'Paolo',
                sureName: 'Amico',
                age: 19
            }
        ];

// 4 Creare un ciclo dove andremo a stampare tutte le propietà per singolo studente
    // SOTTO SEZIONI PUTNO 4
    // Creiamo il ciclo per ogni studente:
    for (const key in studentData) {
        console.log(studentData[key])
    }

// 5 Attraverso 3 PROMPT diamo la possibilità all'utente di aggiungere un nuovo oggetto mantenendo l'oridne di : NOMEl, COGNOME, ETA'   
    // SOTTO SEZIONI PUTNO 5
    // Creiamo i prompt per gli altri studenti:
     
    const inYourName = prompt ('Enter your Name')
    const inYourSecondName = prompt ('Enter your Second Name')
    const inYourAge = prompt ('Enter your Age')

