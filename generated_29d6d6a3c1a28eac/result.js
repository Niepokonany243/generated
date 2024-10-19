// result.js

// Function to display the quiz result
function displayResult() {
    // Get the score from local storage
    const score = localStorage.getItem('quizScore');
    const totalQuestions = 50; // Total questions in the quiz

    // Check if the score exists in local storage
    if (score !== null) {
        // Convert score to an integer
        const finalScore = parseInt(score);

        // Calculate the percentage score
        const percentage = (finalScore / totalQuestions) * 100;

        // Get the result container element
        const resultContainer = document.getElementById('result-container');

        // Create result message based on score
        let resultMessage;
        if (percentage >= 90) {
            resultMessage = 'Excellent work! You scored ' + finalScore + ' out of ' + totalQuestions + '.';
        } else if (percentage >= 75) {
            resultMessage = 'Great job! You scored ' + finalScore + ' out of ' + totalQuestions + '.';
        } else if (percentage >= 50) {
            resultMessage = 'Good effort! You scored ' + finalScore + ' out of ' + totalQuestions + '.';
        } else {
            resultMessage = 'Keep trying! You scored ' + finalScore + ' out of ' + totalQuestions + '.';
        }

        // Update the result container with the score and message
        resultContainer.innerHTML = `<h1>Your Score: ${finalScore} / ${totalQuestions}</h1><p>${resultMessage}</p>`;
    } else {
        // If no score found, display a default message
        document.getElementById('result-container').innerHTML = '<h1>No score found. Please take the quiz again!</h1>';
    }
}

// Call the displayResult function on page load
window.onload = displayResult;
