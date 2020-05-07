let jokeSetup = document.querySelector('#joke-setup')
let jokePunchline = document.querySelector('#joke-punch')
let jokeCategory = document.querySelector('#joke-category')
let jokeAuthor = document.querySelector('#joke-author')

fetch("http://localhost:3000/jokes")
    .then(response => response.json())
    .then(selectRandomJoke)

function selectRandomJoke(jokes) {
    const randomid = Math.floor(Math.random() * jokes.length)
    const randomJoke = jokes[`${randomid}`]
    displayRandomJoke(randomJoke)
}

function displayRandomJoke(joke) {
    const categoryValue = document.querySelector('#joke-category-value')
    const authorValue = document.querySelector('#joke-author-value')
    categoryValue.innerText = joke.category
    authorValue.innerText = joke.author.name
    jokeSetup.innerHTML = `<b>Setup: </b>${joke.setup}`
    jokePunchline.innerHTML = `<b>Punchline: </b>${joke.punchline}`
    rateThisJoke(joke.id)
}

function rateThisJoke(jokeID) {
    let idLocation = document.querySelector('form')
    let jokeIdInput = document.createElement("input")
    jokeIdInput.type = "hidden"
    jokeIdInput.name = "joke_id"
    jokeIdInput.value = `${jokeID}`
    idLocation.append(jokeIdInput)
    console.log(jokeIdInput)
}