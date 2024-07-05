// quiz.js
const questions = {
    en: [
        "What is the capital of France?",
        "What is 2 + 2?",
        "What is the color of the sky?"
    ],
    pt: [
        "Qual é a capital da França?",
        "Quanto é 2 + 2?",
        "Qual é a cor do céu?"
    ]
};

let currentLanguage = 'en';
let currentQuestionIndex = 0;

function changeLanguage() {
    const languageSelector = document.getElementById('language');
    currentLanguage = languageSelector.value;
    currentQuestionIndex = 0;
    displayQuestion();
    updateFlag();
}

function displayQuestion() {
    const questionContainer = document.getElementById('question');
    questionContainer.innerText = questions[currentLanguage][currentQuestionIndex];
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions[currentLanguage].length) {
        currentQuestionIndex = 0; // Reinicia o quiz
    }
    displayQuestion();
}

function updateFlag() {
    const languageSelector = document.getElementById('language');
    const selectedOption = languageSelector.options[languageSelector.selectedIndex];
    const flag = selectedOption.getAttribute('data-flag');
    document.getElementById('flag').src = flag;
}

// Inicializa o quiz exibindo a primeira pergunta
window.onload = function() {
    displayQuestion();
    updateFlag();
};
