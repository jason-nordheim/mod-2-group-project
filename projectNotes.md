
# Deliverables 

[x] Home page displays random joke
  [x] Rate joke from home page
  [x] fix coloring of text (setup/punchline) --- JN
[x] Find & rate
  [] filter jokes by author --- JN
  [] filter jokes by category --- JN 
  [x] rate a displayed joke 
[x] Submit a funny 
  [x] create a new joke and link to existing author 
  [x] create a new joke and associated with new author (two create statements)
[] About Page 
  [x] has authors 
  [x] has information sources --- AW 
    - DadJokes 
  [x] list technologies used --- AW 
  [] has information sources --- AW 
    - DadJokes 
  [] list technologies used --- AW 
    - Rails API (Rails 6 / Ruby) 
    - HTTP requests (GET/POST/UPDATE/PUT/DELETE)
    - JavaScript DOM Manipulation 
    - JavaScript API Calls using fetch 
    - CSS styling 
[] Admin Page 
  [x] html and js files created and linked to about page
  [x] remove joke 
  [] update joke 





```js
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
```