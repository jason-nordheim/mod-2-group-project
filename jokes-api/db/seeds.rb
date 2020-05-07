Joke.destroy_all
Author.destroy_all

unknown = Author.create(name: 'Unknown')
colbert = Author.create(name: 'Steven Colbert')
dad = Author.create(name: "Dad")
george = Author.create(name: "George Carlin")
tina = Author.create(name: "Tina Fey")

random_author = Author.find(rand(Author.all.length - 1) + 1)

Joke.create(category: "general",
    setup: 'What did Michael Jackson name his denim store?',
    punchline: 'Billy Jeans',
    author_id: colbert) 
Joke.create(category: "technology",
    setup: "What do you call a computer floating in the ocean?",
    punchline: "A Dell rolling in the deep",
    author_id: dad)
Joke.create(category: "pop culture",
    setup: "What do you call a ride sharing app that serves breakfast?",
    punchline: "Eggs Uber Easy",
    author_id: george)
Joke.create(category: "technology",
    setup: "Why are PCs like air-conditioners",
    punchline: "They stop working properly if you open windows",
    author_id: tina)

# request RandomJokeApi.get ("https://official-joke-api.appspot.com/random_ten")
# jokes = JSON.parse(request)

# jokes.each do |joke|
#     Joke.find_or_create_by(setup: "joke['setup']") do |joke|
#         joke.category = joke['type'],
#         joke.punchline = joke['punchline']
#         joke.author_id = Author.find(rand(Author.all.length-1+1)
#     end
# end
