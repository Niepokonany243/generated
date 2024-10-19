// Main JavaScript file for the Random Web application

// Function to fetch random facts from JSON file
async function fetchRandomFacts() {
    const response = await fetch('randomFacts.json');
    const facts = await response.json();
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

// Function to fetch random quotes from JSON file
async function fetchRandomQuotes() {
    const response = await fetch('randomQuotes.json');
    const quotes = await response.json();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to fetch random images from JSON file
async function fetchRandomImages() {
    const response = await fetch('randomImages.json');
    const images = await response.json();
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Function to dynamically update the content displayed on the webpage
async function updateContent() {
    const fact = await fetchRandomFacts();
    const quote = await fetchRandomQuotes();
    const imageUrl = await fetchRandomImages();

    document.getElementById('factDisplay').textContent = fact;
    document.getElementById('quoteDisplay').textContent = quote;
    document.getElementById('imageDisplay').src = imageUrl;
}

// Event listener for the button click to fetch new content
document.getElementById('fetchButton').addEventListener('click', updateContent);

// Initial content load
updateContent();