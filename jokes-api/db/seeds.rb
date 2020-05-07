# Joke.destroy_all
# Author.destroy_all

david = Author.create(name: 'David Katz')
jared = Author.create(name: 'Jared Stromberg')
dad = Author.create(name: "Dad")
brad = Author.create(name: "Bradley Haley")
tina = Author.create(name: "Tina Fey")

Joke.create(category: "general",
    setup: 'What did Michael Jackson name his denim store?',
    punchline: 'Billy Jeans',
    author_id: dad.id) 
Joke.create(category: "technology",
    setup: "What do you call a computer floating in the ocean?",
    punchline: "A Dell rolling in the deep",
    author_id: tina.id)
Joke.create(category: "pop culture",
    setup: "What do you call a ride sharing app that serves breakfast?",
    punchline: "Eggs Uber Easy",
    author_id: jared.id)
Joke.create(category: "technology",
    setup: "Why are PCs like air-conditioners",
    punchline: "They stop working properly if you open windows",
    author_id: brad.id)
Joke.create(category: "Animals",
    setup: "Why are there no grizzlies in Arizona?",
    punchline: "Because the heat is unbearable.",
    author_id: jared.id)
Joke.create(category: "Food",
    setup: "Did you hear about the angry pancake?",
    punchline: "It totally flipped!",
    author_id: brad.id)

# request URL.get ("https://official-joke-api.appspot.com/random_ten")
# jokes = JSON.parse(request)

# jokes.each do |joke|
#     Joke.find_or_create_by(setup: "joke['setup']") do |joke|
#         joke.category = joke['type'],
#         joke.punchline = joke['punchline']
#         joke.author_id = david
#     end
#  end
