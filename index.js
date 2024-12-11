// Remove an existing element, if required by the test (for example, an element with ID "main").
const main = document.getElementById('main');
if (main) {
    main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set its ID to 'victory' if required by the test
newHeader.id = 'victory';

// Set its text content
newHeader.textContent = 'Dadi is the champion';

// Append the new header to the DOM
document.body.append(newHeader);
