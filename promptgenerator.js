const words = [
    "I didn't see it coming",
    "They came over the hill",
    "It was NOT all a dream",
    "I could see them staring at me",
    "I should never have looked at his phone",
    "The frog was supposed to turn into a handsome prince--not whatever this was",
    "I swore I would never tell anyone what really happened",
    "I saw my old teacher in the supermarket today",
    "FAMILY",
    "LAKE",
    "FLOWERS",
    "PARTY",
    "CONFLICT",
    "DEADLINE",
    "FIREWORKS",
    "Revenge is best served...",
    "She knew it was a bad idea, but...",
    "He couldn't believe what he was seeing...",
    "The previous night had been...",
    "As she ran towards the...",
    "Write a dialogue between a set of estranged twins",
    "'What are you doing here'",
    "'You're not who I thought you were.'",
    "'You should never have invited me'",
    "'I'm never doing that again"




];

const button = document.getElementById("generateBtn");
const display = document.getElementById("wordDisplay");

button.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    display.textContent = randomWord;
});