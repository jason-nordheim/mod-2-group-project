const ul = document.querySelector("#joke-card")

fetch("http://localhost:3000/jokes")
    .then(response => response.json())
    .then(displaySetupUpdateAndDelete)

function displaySetupUpdateAndDelete(jokes){
    jokes.forEach(joke => {
        displaySetup(joke.setup)
        updateCollapsible(joke)
        buildUpdateForm(joke)
        deleteJoke(joke.id)
    });
}

function displaySetup(setup) {
    const li = document.createElement("li") 
    li.innerText = `${setup}`
    ul.appendChild(li)
}

function updateCollapsible(joke) {
    const innerDiv = document.createElement('div')
    innerDiv.className = "content"
    innerDiv.id = `joke${joke.id}`
    // const button = document.createElement('button')
    // button.type = 'button'
    // button.className = "collapsible"
    // button.innerText = 'Update This Joke'
    // const collapse = document.createElement('collapsible')
    // for (let i = 0; i < collapse.length; i++) {
    //     collapse[i].addEventListener("click", function() {
    //       this.classList.toggle("active");
    //       var content = this.nextElementSibling;
    //       if (content.style.display === "block") {
    //         content.style.display = "none";
    //       } else {
    //         content.style.display = "block";
    //       }
    //     });
    //   }
    // ul.appendChild(button)
    ul.appendChild(innerDiv)
}

function buildUpdateForm(joke) {
    const div = document.querySelector(`#joke${joke.id}`)
    const form = document.createElement('form')
    
    form.action = `http://localhost;3000/jokes/${joke.id}`
    form.method = "POST"
    form.innerHTML = `
        <input type="text" name="setup" id="setup" value="${joke.setup}">
        <input type="text" name="punchline" id="punchline" value="${joke.punchline}">
        <input type="text" name="category" id="category" value="${joke.category}">
        <input type="text" name="author_id" id="author_id" value="${joke.author.name}">
        <input type="submit" value="Update Joke"/>
        <input type="hidden" name="_method" value="put"/>
        `
    div.appendChild(form)
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
