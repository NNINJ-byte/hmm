// script.js

const characters = [
    { name: "Alicia Termina Magentano", image: "Alicia Termina Magentano.png" },
    { name: "Lachiel Adria Magentano", image: "Lachiel Adria Magentano.png" },
    { name: "Lloyd Frontera", image: "Lloyd Frontera.png" },
    { name: "Scheherazade", image: "scheherazade.png" },
    // Add more characters as needed
];

let currentCharacterIndex = 0;

const characterImage = document.getElementById('character-image');
const guessInput = document.getElementById('guess-input');
const submitGuessButton = document.getElementById('submit-guess');
const feedback = document.getElementById('feedback');
const nextCharacterButton = document.getElementById('next-character');
function answers(){
    guessInput.value=characters[currentCharacterIndex].name.toLowerCase();
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
        feedback.innerHTML = `Congratulations! You've completed the game!
        Waiting for your reply: <a href = "https://www.instagram.com/rudraprasad_pog/">Chat</a>`;
        createRippleEffect('Friends again..?', 1000, 50);
        nextCharacterButton.style.display = 'none';
        
    }
});

// Initialize the game
loadCharacter();
function createRippleEffect(text, duration = 2000, interval = 500) {
    const body = document.getElementById("game-container");
    body.style.position = 'relative';
    body.style.overflow = 'hidden';
    body.style.margin = '0';
    body.style.height = '100vh';
    body.style.width = '100vw';
    body.style.backgroundColor = '#fff';
  
    function createTextElement(content) {
      const textElement = document.createElement('div');
      textElement.textContent = content;
      textElement.style.position = 'absolute';
      textElement.style.transform = 'scale(0)';
      textElement.style.opacity = '1';
      textElement.style.color = '#000'; // Customize the text color
      textElement.style.fontSize = '5vw'; // Big text size
      textElement.style.fontWeight = 'bold'; // Customize the font weight
      textElement.style.pointerEvents = 'none';
      textElement.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`;
      return textElement;
    }
  
    function getRandomPosition() {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      return { x, y };
    }
  
    function createRipple() {
      const textElement = createTextElement(text);
      const { x, y } = getRandomPosition();
      textElement.style.left = `${x}px`;
      textElement.style.top = `${y}px`;
      body.appendChild(textElement);
  
      // Trigger the animation
      requestAnimationFrame(() => {
        textElement.style.transform = 'scale(1)';
        textElement.style.opacity = '0';
      });
  
      // Remove the element after animation ends
      setTimeout(() => {
        body.removeChild(textElement);
      }, duration);
    }
  
    // Create a ripple effect in a loop
    setInterval(createRipple, interval);
  }
  
  // Usage example
  // Call the function

  
  // Usage example
  // Call the function
  
