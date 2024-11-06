// Stap 1: Definieer de variabelen
let Requiredcost = 100;  // Het benodigde budget om het product te kopen
let Money = 0;           // Het huidige saldo
let product = 60;        // Het product kost 60 euro

// Functie om geld toe te voegen
function Addmoney() {
    Money += 10;  // Voeg 10 euro toe aan het saldo
    updatemoney();  // Werk de weergave bij na het toevoegen van geld
}

// Functie om het saldo en de boodschap te updaten
function updatemoney() {
    // Werk het saldo bij op de pagina
    document.getElementById("updatemoney").innerText = "Huidig saldo: " + Money + " euro";

    // Controleer of er genoeg budget is om het product te kopen
    let message = "";  // Variabele voor de boodschap
    let messageColor = "";  // Variabele voor de tekstkleur

    // Stap 2: Controleer of er genoeg budget is
    if (Money >= Requiredcost) {
        // Als er genoeg budget is
        message = "U heeft genoeg geld!";
        messageColor = "green";  // Groene tekst voor genoeg geld
    } else {
        // Als er niet genoeg budget is
        message = "Helaas, te weinig geld";
        messageColor = "red";  // Rode tekst voor te weinig geld
    }

    // Werk de boodschap bij op de pagina
    document.getElementById("message").innerHTML = "<p style='color: " + messageColor + ";'>" + message + "</p>";
}

// Begin met het updaten van de weergave bij het laden van de pagina
updatemoney();
