const jokeCategories = []
const categoryOptions = document.querySelector('#category-options')
const jokeAttributes = ["setup", "punchline"]
const jokeForm = document.querySelector('#joke-form')

fetch('http://localhost:3000/jokes')
    .then(response => response.json())
    .then(getCategories)

fetch('http://localhost:3000/authors')
    .then(response => response.json())
    .then(createForm)

function getCategories(jokes) {
    jokes.forEach(joke => {
        if (jokeCategories.includes(joke.category)) {
            
        } else {
            jokeCategories.push(joke.category)
        }
    });
    createCategoryOptions();
    console.log(jokeCategories)
}

function createCategoryOptions () {
    jokeCategories.forEach(category => {
        option = document.createElement('option')
        option.name = category
        option.value = category
        option.innerText = `${category}`
        categoryOptions.appendChild(option)
    });
}

function createForm() {
    jokeAttributes.forEach(attribute => {
        let label = document.createElement('label')
        let input = document.createElement("input")

        label.htmlFor = attribute 
        label.innerText = `${attribute}`

        input.attributes = "required"
        input.htmlFor = attribute
        input.name = attribute
        input.id = attribute

        jokeForm.appendChild(label)
        jokeForm.appendChild(input)
    });
    createAuthor ();
    createSubmit ();
}
function createSubmit () {
    let submit = document.createElement('input')
    submit.type = "submit"
    submit.value = "create"
    jokeForm.appendChild(submit)
}

function createAuthor() {
    let label = document.createElement('label')
    let input = document.createElement("input")

    label.htmlFor = "author_id"
    label.innerText = "Author"

    input.attributes = "required"
    input.htmlFor = "author_id"
    input.name = "author_id"
    input.id = "author_id"

    jokeForm.appendChild(label)
    jokeForm.appendChild(input)
}