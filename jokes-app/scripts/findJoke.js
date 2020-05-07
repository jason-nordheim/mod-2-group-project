const queryJokesForm = document.querySelector('#query-jokes');
let JOKES = [];
let AUTHORS = [];

// get data 
document.addEventListener('DOMContentLoaded', (event) => {
  cacheAuthors()
    .then(cacheJokes)
    .then(renderCategories)
    .then(renderAuthors)
    .then(renderJokes);
});

async function cacheAuthors() {
  await fetch('http://localhost:3000/authors')
    .then(response => response.json())
    .then((a) => AUTHORS = a)
  console.log(`Authors cached (${AUTHORS.length}):\n ${JSON.stringify(AUTHORS)}`)
}
async function cacheJokes() {
  await fetch('http://localhost:3000/jokes')
    .then(response => response.json())
    .then((j) => JOKES = j)
  console.log(`JOKES cached (${JOKES.length}):\n ${JSON.stringify(JOKES)}`)
}


// function renderFilterSubmitButton() {
//   const button = document.createElement("button");
//   button.addEventListener('onclick', filterByAuthorAndCategory);
//   button.innerText = "Filter";
//   queryJokesForm.appendChild(button);
// }

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
  const filterSection = document.querySelector('#authors');
  filterSection.appendChild(h3)
  filterSection.appendChild(ul);
}

function filterJokes(event) {
  // re-render jokes 
  renderJokes();
  setFilterClass(event.target)

  // perform the filter 
  let filter = event.target.classList[0]; // either "author" or "category "
  let filterValue = event.target.innerText;
  const displayedJokes = document.getElementsByClassName('displayed-joke');
  const relatedAuthor = AUTHORS.find(a => a.name == filterValue);
  let i = displayedJokes.length - 1;
  while (i > -1) {
    if (filter == "author") {
      //console.log(`filterValue: ${filterValue}`)
      const author = getJokeAuthorFromDisplayedDiv(displayedJokes[i])
      // console.log(`filterValue: ${filterValue}`)
      // console.log(`authro: ${author}`)
      // console.log(`should remove: ${author == filterValue}`)
      if (author != filterValue) {
        displayedJokes[i].remove();
      }
    } else if (filter == "category") {
      const elementCategory = getJokeCategoryFroDisplayedJokeDiv(displayedJokes[i])
      if (elementCategory != filterValue) {
        displayedJokes[i].remove();
      }
    }
    i--;
  }
}

function setFilterClass(sourceElement) {
  removeAnySetFilterClass();
  sourceElement.classList.add('current-filter');
}

function removeAnySetFilterClass() {
  const authors = document.getElementsByClassName('author');
  for (let i = 0; i < authors.length; i++) {
    const element = authors[i];
    element.classList.remove('current-filter');
  }

  const categories = document.getElementsByClassName('category');
  for (let i = 0; i < categories.length; i++) {
    const element = categories[i];
    element.classList.remove('current-filter')
  }
}

function getJokeAuthorFromDisplayedDiv(HTMLDiv) {
  const output = HTMLDiv.childNodes[3].innerText;
  return output.slice(8, output.length);
}

// returns the joke category from the div element containing a joke 
// by parsing its DOM nodes 
function getJokeCategoryFroDisplayedJokeDiv(HTMLDiv) {
  const text = HTMLDiv.childNodes[2].innerText;
  let output = text.slice(10, text.length);
  return output;
}



function renderJokes() {
  const jokesContainer = document.querySelector('#jokes-container');

  // remove any dsiplayed jokes to avoid duplication 
  jokesContainer.childNodes.forEach(node => node.remove());

  JOKES.forEach(j => {
    const container = document.createElement('div');
    container.classList.add('displayed-joke')

    const setupDiv = document.createElement('div');
    setupDiv.innerHTML = `<p class='joke-setup'><b>Setup: </b>${j.setup}</p>`;
    container.appendChild(setupDiv);

    const punchline = document.createElement('div');
    punchline.innerHTML = `<p class='joke-punchline'><b>Punchline: </b>${j.punchline}</p>`
    container.appendChild(punchline);

    const categoryDiv = document.createElement('div')
    categoryDiv.innerHTML = `<p class='joke-category'><b>Category: </b>${j.category}</p>`;
    container.appendChild(categoryDiv);

    const author = findJokeAuthor(j);
    const authorDiv = document.createElement('div')
    authorDiv.innerHTML = `<p class='joke-author'><b>Author: </b>${author.name}</p>`;
    container.appendChild(authorDiv)

    const ratingForm = createRatingForJoke(j);
    container.appendChild(ratingForm);

    jokesContainer.appendChild(container);
  })
}


function findJokeAuthor(joke) {
  //console.log(`Find Author of Joke: ${JSON.stringify(joke)}`);
  let authorID = joke.author_id;
  //console.log(`Author ID: ${authorID}`);
  let result = AUTHORS.find(a => a.id == joke.author_id)
  //console.log(`Result: ${result}`)
  return result;
}





function createRatingForJoke(joke) {
  const form = document.createElement('form');
  form.action = "http://localhost:3000/ratings";
  form.method = "POST";
  form.innerHTML = `<label for="rating">Rate This Joke (1-5)</label>
  <input min="1" max="5" type="number" name="rating" class="rating" for="rating" " />
  <input type="hidden" name="joke_id" value="${joke.id}"> 
  <input class='btn' type="submit" value="Click Here!">`;
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
  const filterSection = document.querySelector('#categories');
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