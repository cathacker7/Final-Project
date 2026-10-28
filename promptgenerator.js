const prompts = [
    "Write about Vampires.",
    "Write about a Theif",
    "Write about a Ghost"
];

const promptText = document.querySelector("#prompt");
const button = document.querySelector("#generateBtn");

button.addEventListener("click", function() {

    const randonIndex = Math.floor(Math.random() * prompts.length);
    promptText.textContent = prompts[randomIndex];
});