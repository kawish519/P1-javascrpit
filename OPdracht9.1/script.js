function leeftijdsControle() {
    var leeftijd = prompt("Hoe oud ben je?");
    
    if (isNaN(leeftijd) || leeftijd === "") {
        alert("Voer een geldig getal in.");
        return;
    }

    leeftijd = parseInt(leeftijd);

    if (leeftijd >= 18) {
        window.location.href = "oud genoeg.html"; 
    } else {
        document.body.innerHTML = '<div class="red-page">Helaas je bent te jong</div>';
    }
}


window.onload = leeftijdsControle;
