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

function createCategoryOptions() {
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
        const label = document.createElement('label')
        const input = document.createElement("input")

        label.htmlFor = attribute
        label.innerText = `${attribute}`

        input.attributes = "required"
        input.htmlFor = attribute
        input.name = attribute
        input.id = attribute
        input.oninput = ValidateEntry;

        jokeForm.appendChild(label);
        jokeForm.appendChild(input)
    });
    createAuthor();
    createSubmit();
}

function ValidateEntry(event) {
    const elementID = event.target.id;
    const element = document.querySelector(`#${elementID}`);
    //console.log(`inner text: ${element.value}`)
    if (element.value.length == 0) {
        element.classList.remove('valid-option')
        element.classList.remove('invalid-option')
    } else if (element.value.length < 3) {
        //console.log('invalid')
        element.classList.remove('valid-option')
        element.classList.add('invalid-option')
    } else {
        //console.log('valid')
        element.classList.remove('invalid-option')
        element.classList.add('valid-option')
    }
    shouldEnableSubmit();
}

function shouldEnableSubmit() {
    const submit = document.querySelector('#submit-btn');
    const setup = document.querySelector('#setup');
    const punchline = document.querySelector('#punchline');
    const author = document.querySelector('#author_id');

    if (setup.value.length > 3 && punchline.value.length > 3 && author.value.length > 3) {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
}

function createSubmit() {
    const submit = document.createElement('input');
    submit.id = 'submit-btn';
    submit.type = "submit";
    submit.value = "create";
    submit.disabled = true;
    jokeForm.appendChild(submit)
}

function createAuthor() {
    const label = document.createElement('label')
    const input = document.createElement("input")

    label.htmlFor = "author_id"
    label.innerText = "Author"

    input.attributes = "required"
    input.htmlFor = "author_id"
    input.name = "author_id"
    input.id = "author_id"
    input.oninput = ValidateEntry;

    jokeForm.appendChild(label)
    jokeForm.appendChild(input)
}