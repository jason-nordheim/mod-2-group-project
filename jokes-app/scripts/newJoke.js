const jokeCategories = ["general", "pop culture", "technology", "nature", "food", "sports" ]
const categoryOptions = document.querySelector('#category-options')
const jokeAttributes = ["setup", "punchline", "author"]
const jokeForm = document.querySelector('#joke-form')

fetch('http://localhost:3000/authors')
    .then(response => response.json())
    .then(console.log)
    
createCategoryOptions();
createForm();

function getCategories() {

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
        input.htmlFor = attribute
        input.name = attribute
        input.id = attribute
        jokeForm.appendChild(label)
        jokeForm.appendChild(input)
    });
    let submit = document.createElement('input')
    submit.type = "submit"
    submit.value = "create"
    jokeForm.appendChild(submit)
}

function searchAuthors() {

}