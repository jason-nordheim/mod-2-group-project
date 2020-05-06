const queryJokesForm = document.querySelector('#query-jokes');
let JOKES = [];
let AUTHORS = [];

// get data 
document.addEventListener('DOMContentLoaded', (event) => {
  cacheJokes()
    .then(cacheAuthors)
    .then(renderCategories)
    .then(renderAuthors)
    .then(renderJokes);
});

async function cacheAuthors() {
  await fetch('http://localhost:3000/authors')
    .then(response => response.json())
    .then((a) => AUTHORS = a)
}
async function cacheJokes() {
  await fetch('http://localhost:3000/jokes')
    .then(response => response.json())
    .then((j) => JOKES = j)
}


function renderFilterSubmitButton() {
  const button = document.createElement("button");
  button.addEventListener('onclick', filterByAuthorAndCategory);
  button.innerText = "Filter";
  queryJokesForm.appendChild(button);
}

function filterByAuthorAndCategory() {
  console.log('hello')
  // get the category
  // get the author 
  // filter our the jokes that don't meet that criteria 
}

function renderAuthors() {
  const ul = document.createElement('ul');
  const h3 = document.createElement('h3');
  h3.innerText = 'Filter Authors:';
  AUTHORS.forEach(a => {
    const li = document.createElement('li');
    li.onclick = filterJokes;
    li.classList.add('author')
    li.value = a.id;
    li.innerText = `${a.name}`;
    ul.appendChild(li);
  })
  const filterSection = document.querySelector('#filter');
  filterSection.appendChild(h3)
  filterSection.appendChild(ul);
}

function filterJokes() {
  const displayedJokes = document.getElementsByClassName('displayed-joke');
  console.log(displayedJokes);
}

function renderJokes() {
  console.log('jokes', JOKES)
  const jokesContainer = document.querySelector('#jokes-container');
  JOKES.forEach(j => {
    console.log("j", j)
    const container = document.createElement('div');
    container.classList.add('displayed-joke')
    const category = document.createElement('div')
    category.innerHTML = `<p class='joke-category'><b>Category:<b>${j.category}</p>`;
    container.appendChild(category);

    const setup = document.createElement('div');
    setup.innerHTML = `<p class='joke-setup'><b>Setup:</b>${j.setup}</p>`;
    container.appendChild(setup);

    const punchline = document.createElement('div');
    punchline.innerHTML = `<p class='joke-punchline'><b>Punchline:</b>${j.punchline}</p>`
    container.appendChild(punchline);

    const ratingForm = createRatingForJoke(j);
    container.appendChild(ratingForm);

    jokesContainer.appendChild(container);
  })
}

function createRatingForJoke(joke) {
  const form = document.createElement('form');
  form.action = "http://localhost:3000/ratings";
  form.method = "POST";
  form.innerHTML = `<label for="rating">Rate This Joke</label>
  <input min="1" max="5" type="number" name="rating" class="rating" for="rating" " />
  <input type="hidden" name="joke_id" value="${joke.id}"> 
  <input type="submit" value="Click Here!">`;
  return form;
}

function renderCategories() {
  const ul = document.createElement('ul');
  const h3 = document.createElement('h3');
  h3.innerText = 'Filter Categories:';
  const uniqueCategories = makeUnique(JOKES.map(j => j.category))
  uniqueCategories.forEach(c => {
    const li = document.createElement('li');
    li.onclick = filterJokes;
    li.classList.add('category')
    li.value = c;
    li.innerText = c
    ul.appendChild(li);
  })
  const filterSection = document.querySelector('#filter');
  filterSection.appendChild(h3)
  filterSection.appendChild(ul);
}


function makeUnique(collection) {
  let output = [];
  for (let i = 0; i < collection.length; i++) {
    // if this finds a match, this will not be null => truthy || if null => falsey 
    let exists = false;
    for (let j = 0; j < output.length; j++) {
      if (collection[i] == output[j]) {
        exists = true;
      }
    }
    if (!exists) {
      output.push(collection[i])
    }
  }
  return output;
}