const verbInfinitif = ["être", "avoir", "faire", "aller", "envoyer", "renvoyer", "venir", "devoir", "apercevoir", "recevoir", "décevoir", "savoir", "vouloir", "voir", "pouvoir", "courir", "mourir", "tenir", "cueillir", "pleuvoir", "falloir", "valoir"];
const verbStamm = ["ser", "aur", "fer", "ir", "enverr", "renverr", "viendr", "devr", "apercevr", "recevr", "décevr", "saur", "voudr", "verr", "pourr", "courr", "mourr", "tiendr", "cueiller", "pleuvr", "faudr", "vaudr"];
const endungen = ["ai", "as", "a", "ons", "ez", "ent"];
const personen = ["je", "tu", "il, elle, on", "nous", "vous", "ils/elles"];

const nurIlForm = ["pleuvoir", "falloir", "valoir"];

var verb = 0;
var person = 0;

function start(){
    var WortVorgabe = document.getElementById("WortVorgabe");

    verb = Math.floor(Math.random() * verbInfinitif.length);
    
    if (nurIlForm.includes(verbInfinitif[verb])) {
        person = 2; // 3. Person Singular, da "il" an Index 2 in `personen` steht
    } else {
        person = Math.floor(Math.random() * personen.length);
    }

    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("sample3").value = ""

    document.getElementById("sample3").addEventListener("keydown", function(event) {
        korrigieren(event, verb, person);
    });

    WortVorgabe.textContent = verbInfinitif[verb].toString() + " (" + personen[person].toString() + ")";
    
}

function korrigieren(event, verb, person) {
    if (event.key === "Enter") {
        var antwort = document.getElementById("sample3").value;
        // Generiere die richtige Antwort durch Kombination des Stamms und der Endung
        var richtigeAntwort = verbStamm[verb] + endungen[person];

        // Überprüfe die Antwort
        if (antwort === richtigeAntwort) {
            document.getElementById("loesung").textContent = "";
            
            console.log("richtig");
            document.getElementById("body").style.backgroundColor = "rgb(213, 234, 213)"; // Grün für korrekt
            setTimeout(start, 500); // Starte ein neues Verb nach einer kurzen Verzögerung
        } else {
            console.log("falsch");
            document.getElementById("body").style.backgroundColor = "rgb(255, 140, 140)"; // Rot für falsch
            setTimeout(function() {
                document.getElementById("body").style.backgroundColor = "white";
                document.getElementById("sample3").value = "";
            }, 500);   
        }

        // Verhindere das Standardverhalten
        event.preventDefault();
    }
}

function zeigeLoesung() {
    var richtigeAntwort = verbStamm[verb] + endungen[person];
    document.getElementById("loesung").textContent = richtigeAntwort;
}
