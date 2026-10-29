const words = [
    "Apple",
    "Banana",
    "Cherry",
    "Dragonfruit",
    "Elderberry"
];

const button = document.getElementById("generateBtn");
const display = document.getElementById("wordDisplay");

button.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    display.textContent = randomWord;
});