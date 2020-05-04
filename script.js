var count = 10;

document.getElementById('btn-enter').addEventListener("click", function() {
    // Cryptage du mot
    var word = document.getElementById('word-to-guess').value.toUpperCase();
    var wordSplit = word.split('');
    var wordToGuessArray = [];
    
    for (var i = 0; i < wordSplit.length; i++) {
        wordToGuessArray[i] = "_";
    };
    var wordToGuess = wordToGuessArray.join(' ');
    console.log(wordToGuess);

    //Cacher partie Joueur 1
    document.getElementById('bloc-j1').setAttribute("style", "display: none");

    //Afficher partie Joueur 2
        // Mise en page
    var divJ2 = document.createElement("div");
    divJ2.setAttribute("class", "bloc-j2");
    document.getElementById('cadre').appendChild(divJ2);

    var h2j2 = document.createElement("h2");
    h2j2.appendChild(document.createTextNode("Joueur 2"));
    divJ2.appendChild(h2j2);

        // Affichage du mot secret
    var pj2 = document.createElement("p");
    pj2.setAttribute("style", "text-align: center; font-size: 40px");
    pj2.appendChild(document.createTextNode(wordToGuess));
    divJ2.appendChild(pj2);

        // Affichage de la zone de saisie de lettres
            // Champs de saisie
    var guessingArea = document.createElement("input");
    guessingArea.setAttribute("id", "letters-j2");
    guessingArea.setAttribute("type", "text");
    guessingArea.setAttribute("name", "letters");
    guessingArea.setAttribute("placeholder", "Proposez une lettre");
    guessingArea.setAttribute("value", "");
    guessingArea.setAttribute("max-length", "1");
    guessingArea.setAttribute("style", "display: block; margin: 20px auto; width: 300px");

    divJ2.appendChild(guessingArea);

            // Bouton valider
    var guessingButton = document.createElement("input");
    guessingButton.setAttribute("id", "button-j2");
    guessingButton.setAttribute("type", "button");
    guessingButton.setAttribute("value", "Valider");
    guessingButton.setAttribute("style", "display: block; margin: auto");

    divJ2.appendChild(guessingButton);

    // Action Joueur 2
    guessingButton.addEventListener("click", function() {
        var suggestedLetter = guessingArea.value.toUpperCase();

        if (!suggestedLetter.match(/[A-Z]/g)) {
            alert("Attention, ce n'est pas une lettre");
        } if (suggestedLetter.length > 1) {
            alert("Attention, il ne faut entrer qu'une lettre !")
        } else {

            if (wordSplit.includes(suggestedLetter)) {
                for (i = 0 ; i < wordSplit.length ; i++) {
                    if (wordSplit[i] == suggestedLetter) {
                        wordToGuessArray[i] = suggestedLetter;
                        wordToGuess = wordToGuessArray.join(' ');
                        pj2.textContent = wordToGuess;
                        console.log(wordToGuess); 
                    }
                };
            } else {
                count--;
                document.getElementById("trycount").textContent = count;
            }
        }
        guessingArea.value = "";

        // Condition de victoire
        if (!wordToGuessArray.includes("_")) {
            console.log('Vous avez gagné !');
            var pvictory = document.createElement("p");
            pvictory.textContent = "Vous avez gagné !";
            pvictory.setAttribute("style", "text-align: center; font-size: 20px");
            divJ2.appendChild(pvictory);

            guessingArea.setAttribute("style", "display: none");
            guessingButton.setAttribute("style", "display: none");
        };

        // Condition de défaite
        if (count === 0) {
            console.log('Vous avez perdu !');
            var plose = document.createElement("p");
            plose.textContent = "Vous avez perdu !";
            plose.setAttribute("style", "text-align: center; font-size: 20px");
            divJ2.appendChild(plose);

            guessingArea.setAttribute("style", "display: none");
            guessingButton.setAttribute("style", "display: none");
        }
    });
});

