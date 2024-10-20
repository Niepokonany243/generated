// Main script for the web application

// Function to initialize the application
function initApp() {
    console.log('Application initialized');
    fetchData();
}

// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        renderData(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Function to render data on the page
function renderData(data) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '';
    data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.textContent = item.name;
        dataContainer.appendChild(itemDiv);
    });
}

// Event listener for DOMContentLoaded to initialize the app
document.addEventListener('DOMContentLoaded', initApp);
