let JOKES = [];

fetch("http://localhost:3000/jokes")
    .then(response => response.json())
    .then(jokes => JOKES = jokes);


document.addEventListener('DOMContentLoaded', function (event) {
    const urlParams = new URLSearchParams(window.location.search);
    const jokeId = urlParams.get("id");
    setupForm(jokeId);

}, false);

function setupForm(jokeID) {
    const form = document.querySelector('edit-form');
    form.action = `http://localhost:30000`
}