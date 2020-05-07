Rating.destroy_all
Joke.destroy_all
Author.destroy_all

#Authours
david = Author.create(name: 'David Katz')
jared = Author.create(name: 'Jared Stromberg')
dad = Author.create(name: "Dad")
brad = Author.create(name: "Bradley Haley")
tina = Author.create(name: "Tina Fey")

#Jokes
joke1 = Joke.create(category: "general",
    setup: 'What did Michael Jackson name his denim store?',
    punchline: 'Billy Jeans',
    author_id: dad) 
joke2 = Joke.create(category: "technology",
    setup: "What do you call a computer floating in the ocean?",
    punchline: "A Dell rolling in the deep",
    author_id: tina)
joke3 = Joke.create(category: "pop culture",
    setup: "What do you call a ride sharing app that serves breakfast?",
    punchline: "Eggs Uber Easy",
    author_id: jared)
joke4 = Joke.create(category: "technology",
    setup: "Why are PCs like air-conditioners",
    punchline: "They stop working properly if you open windows",
    author_id: brad)
joke5 = Joke.create(category: "Animals",
    setup: "Why are there no grizzlies in Arizona?",
    punchline: "Because the heat is unbearable.",
    author_id: jared)
joke6 = Joke.create(category: "Food",
    setup: "Did you hear about the angry pancake?",
    punchline: "It totally flipped!",
    author_id: brad)

# request URL.get ("https://official-joke-api.appspot.com/random_ten")
# jokes = JSON.parse(request)

# jokes.each do |joke|
#     Joke.find_or_create_by(setup: "joke['setup']") do |joke|
#         joke.category = joke['type'],
#         joke.punchline = joke['punchline']
#         joke.author_id = david
#     end
#  end

#Ratings

Rating.create(rating: 4, joke_id: joke1)
Rating.create(rating: 5, joke_id: joke5)
Rating.create(rating: 2, joke_id: joke6)
Rating.create(rating: 5, joke_id: joke3)
Rating.create(rating: 2, joke_id: joke5)
Rating.create(rating: 4, joke_id: joke2)
Rating.create(rating: 1, joke_id: joke1)
Rating.create(rating: 5, joke_id: joke6)
Rating.create(rating: 2, joke_id: joke3)
Rating.create(rating: 3, joke_id: joke2)
Rating.create(rating: 5, joke_id: joke5)
