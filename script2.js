// script2.js

const characters = [
    { name: "Alicia Termina Magentano", image: "Alicia Termina Magentano.png" },
    { name: "Lachiel Adria Magentano", image: "Lachiel Adria Magentano.png" },
    { name: "Lloyd Frontera", image: "Lloyd Frontera.png" },
    { name: "Scheherazade", image: "scheherazade.png" },
];

let currentCharacterIndex = 0;

const characterImage = document.getElementById('character-image');
const guessInput = document.getElementById('guess-input');
const submitGuessButton = document.getElementById('submit-guess');
const feedback = document.getElementById('feedback');
const nextCharacterButton = document.getElementById('next-character');

function answers() {
    guessInput.value = characters[currentCharacterIndex].name.toLowerCase();
}

function loadCharacter() {
    const character = characters[currentCharacterIndex];
    characterImage.src = character.image;
    guessInput.value = '';
    feedback.textContent = '';
    nextCharacterButton.style.display = 'none';
}

submitGuessButton.addEventListener('click', () => {
    const guess = guessInput.value.trim().toLowerCase();
    const correctCharacter = characters[currentCharacterIndex].name.toLowerCase();
    
    if (guess === correctCharacter) {
        feedback.textContent = "Correct! Well done!";
        nextCharacterButton.style.display = 'inline-block';
    } else {
        feedback.textContent = "Oops! Try again!";
    }
});

nextCharacterButton.addEventListener('click', () => {
    currentCharacterIndex++;
    if (currentCharacterIndex < characters.length) {
        loadCharacter();
    } else {
        feedback.innerHTML=`Next Stage : <a href = "stage3.html"><button>Next</button></a>`
        nextCharacterButton.style.display = 'none';
    }
});
// Initialize
loadCharacter();
