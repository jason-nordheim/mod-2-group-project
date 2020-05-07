const ul = document.querySelector("#setup-and-delete")

fetch("http://localhost:3000/jokes")
    .then(response => response.json())
    .then(displaySetupAndDelete)

function displaySetupAndDelete(jokes){
    jokes.forEach(joke => {
        displaySetup(joke.setup)
        deleteJoke(joke.id)
    });
}

function displaySetup(setup) {
    const li = document.createElement("li")

    li.innerText = `${setup}`
    ul.appendChild(li)
}
    
function deleteJoke(id) {
    const form = document.createElement("form")

    form.action = `http://localhost:3000/jokes/${id}`
    form.method = "POST"
    form.innerHTML = `
    <input type="submit" value="Delete Joke"/>
    <input type="hidden" name="_method" value="delete"/>
    `
    ul.appendChild(form)
}
