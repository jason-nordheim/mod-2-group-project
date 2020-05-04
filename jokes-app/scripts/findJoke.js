const selectJokeCategory = document.querySelector("#joke-category")
const selectJokeAuthor = document.querySelector("#joke-author")
const jokeContainer = document.querySelector("#joke-container");

/*  Startup tasks */

fetch('http://localhost:3000/jokes')
  .then(response => response.json())
  .then(showJokes);

fetch('http://localhost:3000/authors')
  .then(response => response.json())
  .then(showAuthors);

function filterJokes() {
  let filter = getCategoryFilter();
  const displayedJokes = document.getElementsByClassName("joke")
  for (let i = displayedJokes.length - 1; i > 0; i--) {
    const jokeDiv = displayedJokes[i];
    const text = jokeDiv.children[0].innerText;
    const match = text.search(`${filter}`);
    console.log(match)
    if (match == -1) { // matching failed 
      console.log("removing ...", jokeDiv)
      jokeContainer.removeChild(jokeDiv)
    }
  }
}


function getCategoryFilter() {
  return selectJokeCategory.children[selectJokeCategory.selectedIndex].value;
}

/* Function */
function showJokes(jokes) {
  // show the potential categories 
  showCategories(jokes);
  // checking to see if we need to filter 
  if (selectJokeCategory.selectedIndex != 0) {
    // show filtered jokes 
    const filter = getCategoryFilter();
    let filteredJokes = jokes.filter((joke) => joke.category == filter);
    filteredJokes.forEach(j => displayJoke(j))
  } else {
    // show all jokes
    jokes.forEach(j => displayJoke(j))
  }
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
  let categories = jokes.map(j => j.category);
  console.log(categories)
  createOption(selectJokeCategory, "Show All"); // index 0 
  categories.forEach((c) => createOption(selectJokeCategory, c));
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