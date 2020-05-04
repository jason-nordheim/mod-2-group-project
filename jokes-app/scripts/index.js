let jokeSetup = document.querySelector('#joke-setup')
let jokePunchline = document.querySelector('#joke-punch')
let jokeCategory = document.querySelector('#joke-category')

fetch("http://localhost:3000/jokes")
    .then(response => response.json())
    .then(console.log)

