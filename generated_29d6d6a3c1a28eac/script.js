// Quiz Application Script

// Variables to keep track of quiz data
let currentQuestionIndex = 0;
let score = 0;
const questionsContainer = document.getElementById('questions-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const submitButton = document.getElementById('submit-button');

// Fetch questions from the questions.json file
fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        const questions = data;
        startQuiz(questions);
    })
    .catch(error => console.error('Error loading questions:', error));

function startQuiz(questions) {
    score = 0;
    currentQuestionIndex = 0;
    showQuestion(questions[currentQuestionIndex]);
    submitButton.addEventListener('click', () => checkAnswer(questions));
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const questions = document.getElementsByClassName('question');
    if (answer.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        displayScore();
    }
}

function displayScore() {
    localStorage.setItem('quizScore', score);
    window.location.href = 'result.html';
}

function checkAnswer(questions) {
    // Move to next question or display score
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        displayScore();
    }
}
