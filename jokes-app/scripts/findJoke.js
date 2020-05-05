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
  console.log('i am filtering jokes')
}

function renderJokes() {
  console.log('i am rendering jokes')
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