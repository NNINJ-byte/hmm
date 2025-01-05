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
        feedback.innerHTML = `
            Congratulations! You've completed the game!
            <br>
            Waiting for your reply: 
            <a href="https://www.instagram.com/rudraprasad_pog/" target="_blank">Chat</a>
        `;
        createRippleEffect('Friends again..?', 1000, 50);
        nextCharacterButton.style.display = 'none';
    }
});

function createRippleEffect(text, duration = 2000, interval = 500) {
    const container = document.getElementById("game-container");
    container.style.position = 'relative';
    container.style.overflow = 'hidden';

    function createTextElement(content) {
        const element = document.createElement('div');
        element.textContent = content;
        element.style.position = 'absolute';
        element.style.transform = 'scale(0)';
        element.style.opacity = '1';
        element.style.color = '#000';
        element.style.fontSize = '3rem';
        element.style.pointerEvents = 'none';
        element.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`;
        return element;
    }

    function getRandomPosition() {
        const x = Math.random() * container.offsetWidth;
        const y = Math.random() * container.offsetHeight;
        return { x, y };
    }

    function createRipple() {
        const element = createTextElement(text);
        const { x, y } = getRandomPosition();
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        container.appendChild(element);

        requestAnimationFrame(() => {
            element.style.transform = 'scale(1)';
            element.style.opacity = '0';
        });

        setTimeout(() => container.removeChild(element), duration);
    }

    setInterval(createRipple, interval);
}

// Initialize
loadCharacter();
