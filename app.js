const board = document.getElementById("board");
const scoreDiv = document.getElementById("score");
const countdownDiv = document.getElementById("countdown");
const highScoreDiv = document.getElementById("highScore");
const resetBtn = document.getElementById("reset");
const startBtn = document.getElementById("start");
const flipSound = document.getElementById("flipSound"); 
const matchSound = document.getElementById("matchSound"); 
const winSound = document.getElementById("winSound");
const wrongSound = document.getElementById("wrongSound");
const loseSound = document.getElementById("loseSound");
const difficultySelect = document.getElementById("difficulty");
const themeSelect = document.getElementById("theme");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");
const popupButton = document.getElementById("popupButton");

const themes = {
  fruits: ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍒', '🥝', '🍍', '🥭', '🥑', '🍆', '🍈', '🍑', '🍅', '🥥', '🍏', '🍋', '🍌', '🍉', '🍇'],
  animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🦄', '🐔', '🐧', '🐦', '🦅', '🦉', '🐴', '🦓', '🦒', '🐙'],
  shapes: ['⭐', '🔷', '🔶', '⬛', '⭕', '💠', '🔘', '🔺', '🔻', '💫', '🌟', '✨', '💥', '🎯', '🎪', '🎭', '🔳', '🔲', '🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '🟤'],
  weather: ['☀️', '🌤️', '⛅', '🌥️', '☁️', '🌦️', '🌧️', '⛈️', '🌩️', '🌨️', '❄️', '💨', '🌪️', '🌈', '☔', '⚡', '🌫️', '🌊', '🌀', '🌡️', '🌞', '🌝', '🌚', '🌛', '🌜'],
  food: ['🍕', '🍔', '🌭', '🥪', '🌮', '🌯', '🥙', '🍜', '🍝', '🍣', '🍱', '🥘', '🧆', '🥗', '🥨', '🥖', '🍩', '🍪', '🎂', '🍰', '🧁', '🍫', '🍬', '🍭', '🍿'],
  vehicules: ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🛻', '🚚', '🚛', '🚜', '✈️', '🚁', '🚂', '🚃', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚝'],
  plants: ['🌸', '🌹', '🌺', '🌻', '🌼', '🌷', '🌱', '🪴', '🌲', '🌳', '🌴', '🌵', '🌾', '🍃', '☘️', '🍀', '🍁', '🍂', '🍄', '🌰', '🌿', '🌷', '🌼', '🌱', '🍀'],
  sports: ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🥎', '🏓', '🏸', '🥊', '🥋', '🎳', '⛳', '🏌️', '🏇', '🚴', '🏊', '🏄', '⛷️', '🧗', '🏂', '🤼', '🤸', '🏏'],
  technologies: ['💻', '🖥️', '📱', '📷', '🎧', '📺', '⌚', '🔌', '💡', '🎥', '📡', '🕹️', '🔋', '📠', '📀', '💾', '🖨️', '📼', '🔍', '📲', '🔑', '💿', '🖱️', '📡', '📷'],
  musique: ['🎷', '🎸', '🎹', '🥁', '🎺', '🎻', '🎼', '🎤', '🎧', '🎶', '📻', '🔊', '🎙️', '🪕', '📯', '🎹', '🎧', '🎷', '🎺', '🎸', '🥁', '📻', '🔊', '🎶', '🎼'],
  emotions: ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '😍', '🤩', '😘', '😗', '😙', '😚', '😎', '😏', '😶', '😐', '😑', '😕'],
  voyages: ['🗺️', '🏔️', '🌋', '🏝️', '🏜️', '🏰', '🕌', '🕍', '🏯', '🏠', '🏙️', '🌃', '🛤️', '🛳️', '🚂', '✈️', '🚁', '🚀', '🚢', '⛵', '🚡', '🚞', '🚠', '🗽', '🗼'],
  flags: ['🇫🇷', '🇺🇸', '🇨🇳', '🇨🇦', '🇧🇷', '🇩🇪', '🇬🇧', '🇪🇺', '🇮🇳', '🇮🇹', '🇯🇵', '🇰🇷', '🇲🇽', '🇷🇺', '🇿🇦', '🇪🇸', '🇸🇪', '🇦🇺', '🇳🇴', '🇳🇿', '🇫🇮', '🇳🇱', '🇵🇹', '🇩🇰', '🇬🇷'],
  brands: ['🏭', '🏢', '🏥', '🏦', '🏪', '🏫', '🏬', '🏯', '🏰', '🏙️', '🌆', '🌃', '🏤', '🏠', '🏡', '🕍', '🕌', '⛪', '🏛️', '🏗️', '🏘️', '🏚️', '🏩', '🏦'],
  symbols: ['♠️', '♥️', '♦️', '♣️', '⚕️', '⚜️', '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏'],
  hearts: ['💓', '💔', '💕', '💖', '💗', '💘', '💙', '💚', '💛', '💜', '🖤', '💝', '💞', '💟', '❣️', '❤️', '💌', '💬', '💭', '🗯️', '💦', '💤', '💢', '💥', '💨'],
  jobs: ['👩‍💼', '👨‍💼', '👩‍🔬', '👨‍🔬', '👩‍🍳', '👨‍🍳', '👩‍🍼', '👨‍🍼', '👩‍🎤', '👨‍🎤', '👨‍⚕️', '👨‍🎨', '👩‍🎬', '👨‍🎬', '👨‍🚀', '👨‍🎶', '👨‍🏫', '👨‍🚒', '👮‍♂️', '👨‍🌾', '👨‍⚖️', '👨‍🔧', '👩‍🎶', '👨‍💻']
};

let cards = [];
let flippedCards = [];
let matchedCards = [];
let moves = 0;
let timer;
let countdown;
let timeElapsed = 0;
let highScore = localStorage.getItem('highScore') || '-';

highScoreDiv.textContent = `Best Score : ${highScore}`;

function initGame() {
  board.innerHTML = "";
  flippedCards = [];
  matchedCards = [];
  moves = 0;
  timeElapsed = 0;
  scoreDiv.textContent = "Hits : 0";
  countdownDiv.textContent = "remaining time: 0s";
  clearInterval(timer);
  clearInterval(countdown);

  const selectedTheme = themes[themeSelect.value];
  const numPairs = (difficultySelect.value / 2) ** 2;
  cards = shuffle([...selectedTheme.slice(0, numPairs), ...selectedTheme.slice(0, numPairs)]);

  // Ajuster la grille en fonction du niveau de difficulté
  board.style.gridTemplateColumns = `repeat(${difficultySelect.value / 2}, 100px)`;

  cards.forEach((emoji, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.index = index;
    card.dataset.emoji = emoji;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "Carte retournée");

    card.addEventListener("click", () => flipCard(card));
    board.appendChild(card);
  });

  // Démarrer le chronomètre
  timer = setInterval(() => {
    timeElapsed++;
  }, 1000);

  // Démarrer le compte à rebours en fonction du niveau de difficulté
  let remainingTime = difficultySelect.value * 15; // 30 secondes par niveau de difficulté
  countdownDiv.textContent = `remaining time : ${remainingTime}s`;
  countdown = setInterval(() => {
    remainingTime--;
    countdownDiv.textContent = `remaining time: ${remainingTime}s`;
    if (remainingTime <= 0) {
      clearInterval(countdown);
      clearInterval(timer);
      loseSound.play();
      showPopup("Time's up! You've lost. Try again!");
      resetBtn.style.display = "inline-block";
      board.innerHTML = "";
    }
  }, 1000);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function flipCard(card) {
  if (flippedCards.length < 2 && !card.classList.contains("flipped") && !card.classList.contains("matched")) {
    card.textContent = card.dataset.emoji;
    card.classList.add("flipped");
    flipSound.play();
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      checkMatch();
    }
  }
}

function checkMatch() {
  moves++;
  scoreDiv.textContent = `Hits : ${moves}`;

  const [card1, card2] = flippedCards;
  if (card1.dataset.emoji === card2.dataset.emoji) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    matchSound.play();
    matchedCards.push(card1, card2);
    flippedCards = [];

    if (matchedCards.length === cards.length) {
      clearInterval(countdown);
      winSound.play();
      setTimeout(() => {
        showPopup(`Congratulations! You've won in ${moves} moves and ${timeElapsed} seconds! 🎉`);
        if (highScore === '-' || moves < highScore) {
          highScore = moves;
          localStorage.setItem('highScore', highScore);
          highScoreDiv.textContent = `high Score : ${highScore}`;
        }
      }, 300);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      card1.textContent = "";
      card2.textContent = "";
      flippedCards = [];
      wrongSound.play();
    }, 1000);
  }
}

function showPopup(message) {
  popupMessage.textContent = message;
  popup.style.display = "block";
}

popupButton.addEventListener("click", () => {
  popup.style.display = "none";
  resetGame();
});
function resetGame() {
  board.style.display = "none";
  startBtn.style.display = "inline-block";
  difficultySelect.style.display = "inline-block";
  scoreDiv.style.display = "none";
  timerDiv.style.display = "none";
  countdownDiv.style.display = "none";
  resetBtn.style.display = "none";
}

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  difficultySelect.style.display = "none";
  themeSelect.style.display = "none";
  board.style.display = "grid";
  scoreDiv.style.display = "block";
  countdownDiv.style.display = "block";
  resetBtn.style.display = "inline-block";
  highScoreDiv.style.display = "none";
  initGame();
});

resetBtn.addEventListener("click", initGame);
