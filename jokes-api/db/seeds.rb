
default_user = Author.create(name: 'default')
colbert = Author.create(name: 'Steven Colbert')
dad = Author.create(name: "Dad")

Joke.create(category: "general", setup: 'What did Michael Jackson name his denim store?',punchline: 'Billy Jeans', author_id: default_user.id) 
Joke.create(category: "technology", setup: "What do you call a computer floating in the ocean?", punchline: "A Dell rolling in the deep",  author_id: default_user.id)
Joke.create(category: "pop culture", setup: "What do you call a ride sharing app that serves breakfast?", punchline: "Eggs Uber Easy",  author_id: default_user.id)
Joke.create(category: "technology", setup: "Why are PCs like air-conditioners", punchline: "They stop working properly if you open windows", author_id: default_user.id)