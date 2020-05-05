const queryJokesForm = document.querySelector('#query-jokes');
let JOKES = [];
let AUTHORS = [];

// get data 
document.addEventListener('DOMContentLoaded', (event) => {
  cacheJokes().then(renderCategories)
  cacheAuthors().then(renderAuthors)
});

function renderAuthors() {
  const label = createLabel('author', 'Authors: ', 'author');
  const select = document.createElement('select');
  AUTHORS.forEach((author) => {
    const option = createOptionElement(author.name, author.id, 'author');
    select.appendChild(option);
  })
  queryJokesForm.appendChild(label);
  queryJokesForm.appendChild(select)
}

function renderCategories() {
  const uniqueCategories = makeUnique(JOKES.map(j => j.category));
  const select = document.createElement('select');
  const label = createLabel('category', 'Categories: ', 'category')
  uniqueCategories.forEach((c) => {
    const option = createOptionElement(c, c, c);
    select.appendChild(option)
  })
  queryJokesForm.appendChild(label)
  queryJokesForm.appendChild(select)
}

function addCategoryOnChangeEvent(event) {
  console.log(event);
}

function renderJokes() {}


function cacheAuthors() {
  return fetch('http://localhost:3000/authors')
    .then(response => response.json())
    .then((a) => AUTHORS = a);
}

function cacheJokes() {
  return fetch('http://localhost:3000/jokes')
    .then(response => response.json())
    .then((j) => JOKES = j);
}

function createOptionElement(text, id, htmlFor) {
  const option = document.createElement("option");
  option.text = text;
  option.id = id;
  option.htmlFor = htmlFor;
  return option;
}

function createLabel(name, text, htmlFor) {
  const label = document.createElement('label')
  label.name = name;
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
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