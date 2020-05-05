// Page Elements 
const selectJokeCategory = document.querySelector("#joke-category")
const selectJokeAuthor = document.querySelector("#joke-author")
const jokeContainer = document.querySelector("#joke-container");

let JOKES = [];
initialize();


//  Startup tasks 
function initialize() {
  fetchJokes();
  fetchAuthors();

}

function fetchJokes() {
  fetch('http://localhost:3000/jokes')
    .then(response => response.json())
    .then(saveJokes)
}

function fetchAuthors() {
  fetch('http://localhost:3000/authors')
    .then(response => response.json())
    .then(showAuthors);
}

/* called when the select option is changed */
function filterJokes() {
  removeDisplayedJokes();
  let filter = getCategoryFilter();
  let filterdJokes = JOKES.filter(j => j.category == filter)
  filterdJokes.forEach(j => displayJoke(j))
}

// helper function to remove any jokes that are currently displayed on the page
function removeDisplayedJokes() {
  let displayedJokes = document.getElementsByClassName('joke');
  while (displayedJokes.length > 0) {
    displayedJokes[0].remove();
  }
}

// function to get the filter selected by the end user 
function getCategoryFilter() {
  return selectJokeCategory.children[selectJokeCategory.selectedIndex].value;
}

function saveJokes(jokes) {
  JOKES = jokes;
  return JOKES;
}

function displayJoke(joke) {
  const jokeDiv = document.createElement("div")
  jokeDiv.classList.add("joke")

  let category = document.createElement("p");
  category.innerHTML = `<b>Category: </b> ${joke.category}`

  let setup = document.createElement("p");
  setup.innerHTML = `<b>Setup: </b> ${joke.setup}`;

  let punchline = document.createElement("p");
  punchline.innerHTML = `<b>Punchline: </b> ${joke.punchline}`;

  jokeDiv.appendChild(category);
  jokeDiv.appendChild(setup);
  jokeDiv.appendChild(punchline);

  jokeContainer.appendChild(jokeDiv);
}


function showCategories(jokes) {
  // remove any existing categories 
  while (selectJokeCategory.length > 0) {
    selectJokeCategory.children[0].remove();
  }

  let categories = JOKES.map(j => j.category);
  let uniqueCategories = makeUnique(categories);
  createOption(selectJokeCategory, "Show All"); // index 0 
  uniqueCategories.forEach((c) => createOption(selectJokeCategory, c));
}

function createOption(parent, optionValue) {
  let categoryOption = document.createElement('option')
  categoryOption.selected = false;
  categoryOption.value = optionValue;
  categoryOption.label = optionValue;
  parent.appendChild(categoryOption);
}

function showAuthors(authors) {
  //filter 
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