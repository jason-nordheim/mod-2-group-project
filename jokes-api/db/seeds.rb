
unknown = Author.create(name: 'Unknown')
colbert = Author.create(name: 'Steven Colbert')
dad = Author.create(name: "Dad")

dadJokesAPI = Author.create(name: 'Dad Jokes API'); 


Joke.create(category: "general", setup: 'What did Michael Jackson name his denim store?',punchline: 'Billy Jeans', author_id: unknown) 
Joke.create(category: "technology", setup: "What do you call a computer floating in the ocean?", punchline: "A Dell rolling in the deep",  author_id: unknown)
Joke.create(category: "pop culture", setup: "What do you call a ride sharing app that serves breakfast?", punchline: "Eggs Uber Easy",  author_id: unknown)
Joke.create(category: "technology", setup: "Why are PCs like air-conditioners", punchline: "They stop working properly if you open windows", author_id: unknown)

request RandomJokeApi.get ("https://official-joke-api.appspot.com/random_ten")
jokes = JSON.parse(request)

jokes.each do |joke|
    Joke.create({
        category: joke['type'],
        setup: joke['setup'],
        punchline: joke['punchline']
    })
end