// script.js

// Random Web Project - Main JavaScript File
// This file manages interactivity and dynamic content on the website
// Author: [Your Name]
// Date: [Current Date]

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Import any required libraries here e.g. jQuery, Lodash

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Random Content Generation
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Generates random content from a predefined array.
 * @returns {string} Random content string.
 */
function generateRandomContent() {
    const contentArray = [
        'Did you know? The Eiffel Tower can be 15 cm taller during the summer.',
        'Honey never spoils!',
        'Bananas are berries, but strawberries aren’t.',
        'A group of flamingos is called a "flamboyance."
    ];
    const randomIndex = Math.floor(Math.random() * contentArray.length);
    return contentArray[randomIndex];
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Animations
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Adds shake animation to an element.
 * @param {HTMLElement} element - The element to apply the shake effect.
 */
function shakeElement(element) {
    if (element) {
        element.classList.add('shake');
        setTimeout(() => {
            element.classList.remove('shake');
        }, 500);
    }
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Interactive Forms
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Validate form input.
 * @param {HTMLFormElement} form - The form to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
function validateForm(form) {
    // Example validation: Ensure fields are not empty
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    return isValid;
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Event Listeners
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/**
 * Initialize event listeners.
 */
function initEventListeners() {
    const randomContentButton = document.getElementById('random-content-button');
    const form = document.getElementById('interactive-form');

    // Event listener for button click
    randomContentButton.addEventListener('click', () => {
        const contentDiv = document.getElementById('content-div');
        contentDiv.innerHTML = generateRandomContent();
    });

    // Event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm(form)) {
            // Proceed with form submission logic here
            console.log('Form submitted successfully!');
        } else {
            shakeElement(form);
            console.error('Form validation failed.');
        }
    });
}

// Initialize scripts once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initEventListeners);
