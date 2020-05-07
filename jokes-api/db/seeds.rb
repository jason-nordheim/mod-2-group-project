
unknown = Author.create(name: 'Unknown')
colbert = Author.create(name: 'Steven Colbert')
dad = Author.create(name: "Dad")
george = Author.create(name: "George Carlin")
tina = Author.create(name: "Tina Fey")
readersDigest = Author.create(name: "Reader's Digest") # https://www.rd.com/jokes/one-liners/
jason = Author.create(name: "Jason") 

j1 = Joke.create(
    category: "general", 
    setup: 'What did Michael Jackson name his denim store?',
    punchline: 'Billy Jeans', 
    author_id: unknown.id 
) 
j2 = Joke.create(
    category: "technology",
    setup: "What do you call a computer floating in the ocean?", 
    punchline: "A Dell rolling in the deep",
    author_id: unknown.id 
)
j3 = Joke.create(
    category: "pop culture",
    setup: "What do you call a ride sharing app that serves breakfast?",
    punchline: "Eggs Uber Easy",  
    author_id: unknown.id
)
j4 = Joke.create(
    category: "technology", 
    setup: "Why are PCs like air-conditioners",
    punchline: "They stop working properly if you open windows", 
    author_id: unknown.id
)
j5 = Joke.create(
    category: "pop culture",
    setup: "What's the difference between ignorance and apathy?",
    punchline: "I don't know, and I don't care.", 
    author_id: readersDigest.id 
)
j6 = Joke.create(
    category: "writing",
    setup: "Did you hear the abo1ut the semi-colon that broke the law?", 
    punchline: "He was given two consecutive sentences?", 
    author_id: readersDigest.id 
)
j7 = Joke.create(
    category: "pop culture",
    setup: "What if I don't know what the word \"Armageddon\" means?", 
    punchline: "You won't know when it's the end of the world", 
    author_id: jason.id 
)
j8 = Joke.create(
    category: "pop culture", 
    setup: "What's the best thing about the swedish flag", 
    punchline: "I don't know, but its a big plus",
    author_id: readersDigest.id 
)
j9 = Joke.create(
    category: "math", 
    setup: "Did you hear about the mathematician who's afraid of negative numbers?", 
    punchline: "He'll stop at nothing to avoid them", 
    author_id: readersDigest.id 
)
j10 = Joke.create(
    category: "theater", 
    setup: "Why do we tell actors to break a leg?", 
    punchline: "Because every play has a cast", 
    author_id: readersDigest.id 
)
j11 = Joke.create(
    category: "random", 
    setup: "Yesterday I saw a guy spill his Scrabble letters on the road.", 
    punchline: "I asked him: \"What's the word on the streed?\"", 
    author_id: readersDigest.id 
)
j12 = Joke.create(
    category: "math", 
    setup: "How many times can you subtract 10 from 100?", 
    punchline: "Once. The next time you would be subtracting 10 from 90", 
    author_id: readersDigest.id 
)
j13 = Joke.create(
    category: "office jokes", 
    setup: "Sunday and Monday is in a fight. Who wins?", 
    punchline: "Sunday... Monday is a weekday?", 
    author_id: readersDigest.id 
)
j14 = Joke.create(
    category: "music", 
    setup: "Why did Beethoven get rid of his chickens?", 
    punchline: "All they said was, \"Bach, Bach, Bach...\"", 
    author_id: readersDigest.id 
)
j15 = Joke.create(
    category: "science", 
    setup: "What did the DNA say to the other DNA?", 
    punchline: "Do these genes make me look far?", 
    author_id: readersDigest.id 
)
j16 = Joke.create(
    category: "science", 
    setup: "Why don't scientists trust atoms?", 
    punchline: "Because they make up everything?", 
    author_id: readersDigest.id 
)
j17 = Joke.create(
    category: "space", 
    setup: "Did you hear about the claustrophibic astronaut?", 
    punchline: "He just needed a little space.", 
    author_id: readersDigest.id 
)
j18 = Joke.create(
    category: "pop culture", 
    setup: "How do you drown a hipster?", 
    punchline: "Throw him in the mainstream", 
    author_id: readersDigest.id 
)
j19 = Joke.create(
    category: "random", 
    setup: "What sits at the bottom of the sea and twitches?", 
    punchline: "A nervous wreck", 
    author_id: readersDigest.id 
)
j20 = Joke.create(
    category: "food", 
    setup: "What does a nosey pepper do?", 
    punchline: "Gets jalapeño business", 
    author_id: readersDigest.id 
)
j21 = Joke.create(
    category: "religion", 
    setup: "How does Moses make tea?", 
    punchline: "He brews.", 
    author_id: readersDigest.id 
)
j22 = Joke.create(
    category: "pop culture", 
    setup: "Why can't you explain puns to kleptomaniacs?", 
    punchline: "They are always taking things literally", 
    author_id: readersDigest.id 
)
j23 = Joke.create(
    category: "food", 
    setup: "How do you keep a bagel from getting away?", 
    punchline: "Put lox on it", 
    author_id: readersDigest.id 
)
j24 = Joke.create(
    category: "technology", 
    setup: "A man tells his doctor \"Help, I'm addicted to twitter!\"", 
    punchline: "The doctor replies, \"Sorry, I don't follow you...\"", 
    author_id: readersDigest.id 
)
j25 = Joke.create(
    category: "fitness", 
    setup: "What kind of exercise do lazy people do?", 
    punchline: "Diddly-squats", 
    author_id: readersDigest.id 
)
j26 = Joke.create(
    category: "math", 
    setup: "Why don't calculus majors throw house parties?", 
    punchline: "Because you should never drink and derive", 
    author_id: readersDigest.id
)
j27 = Joke.create(
    category: "random", 
    setup: "What do you call a parade of rabbits hopping backwards?", 
    punchline: "A receding hare-line", 
    author_id: readersDigest.id 
)
j28 = Joke.create(
    category: "english", 
    setup: "What’s the different between a cat and a comma?",
    punchline: "A cat has claws at the end of paws; A comma is a pause at the end of a clause.", 
    author_id: readersDigest.id 
)
j29 = Joke.create(
    category: "movies", 
    setup: "What did the Tin Man say when he got run over by a steamroller", 
    punchline: "Curses! Foil again!", 
    author_id: readersDigest.id 
)
j30 = Joke.create(
    category: "random", 
    setup: "What did the left eye say to the right eye?", 
    punchline: "Between you and me, something smells...", 
    author_id: readersDigest.id 
)
j31 = Joke.create(
    category: "food", 
    setup: "What do you call a fake noode?", 
    punchline: "An impasta!", 
    author_id: readersDigest.id 
)
j32 = Joke.create(
    category: "random", 
    setup: "How do you make a tissue dance?", 
    punchline: "Put a little boogie in it", 
    author_id: readersDigest.id 
)
j33 = Joke.create(
    category: "animals", 
    setup: "What do you call a pony with a little cought?", 
    punchline: "A little horse", 
    author_id: readersDigest.id 
)
j34 = Joke.create(
    category: "random", 
    setup: "What did one hat say to the other?",
    punchline: "you wait here. I'll go on a head.", 
    author_id: readersDigest.id 
)
j35 = Joke.create(
    category: "animals", 
    setup: "What did the shark say when he ate the clownfish?", 
    punchline: "This tastes a little funny", 
    author_id: readersDigest.id 
)
j36 = Joke.create(
    category: "animals", 
    setup: "What di the buffalo say when his son left for college?", 
    punchline: "Bison", 
    author_id: readersDigest.id 
)
j37 = Joke.create(
    category: "random", 
    setup: "What is an astronaut's favorite part on a computer?", 
    punchline: "The space bar.", 
    author_id: readersDigest.id 
)
j38 = Joke.create(
    category: "food", 
    setup: "Why did the yogurt got to the art exhibition?", 
    punchline: "Because it was cultured.", 
    author_id: readersDigest.id 
)
j39 = Joke.create(
    category: "pop culture", 
    setup: "Why did the hipster burn his mouth?", 
    punchline: "He drank the cofee before it was cool", 
    author_id: readersDigest.id 
)
j40 = Joke.create(
    category: "animals", 
    setup: "Once my dog ate all the Scrabble tiles.", 
    punchline: "He kept leaving little messages around the house.", 
    author_id: readersDigest.id
)
j41 = Joke.create(
    category: "random", 
    setup: "Did you hear about the two people who stole a calendar?",
    punchline: "They each got six months.", 
    author_id: readersDigest.id 
)
j42 = Joke.create(
    category: "english", 
    setup: "How do poets say hello?", 
    punchline: "Hey, haven't we metaphor?", 
    author_id: readersDigest.id 
)
j43 = Joke.create(
    category: "food", 
    setup: "Why did the oreo go to the dentist?", 
    punchline: "Because he lost his filling", 
    author_id: readersDigest.id 
)
j44 = Joke.create(
    category: "animals", 
    setup: "What do you get from a pampered cow?", 
    punchline: "Spoiled milk", 
    author_id: readersDigest.id
)
j45 = Joke.create(
    category: "sports", 
    setup: "Why is it annoying to eat next to basketball players?", 
    punchline: "They dribble all the time.",
    author_id: readersDigest.id
)
j46 = Joke.create(
    category: "food", 
    setup: "Why did the M&M go to school?", 
    punchline: "It wanted to be a smartie.", 
    author_id: readersDigest.id 
)
j47 = Joke.create(
    category: "religion", 
    setup: "How does a rabbi make his coffee?", 
    punchline: "Hebrews it.", 
    author_id: readersDigest.id
)
j48 = Joke.create(
    category: "animals", 
    setup: "Why aren't koalas actual bears?", 
    punchline: "They don't meet the koalafictions", 
    author_id: readersDigest.id 
)
j49 = Joke.create(
    category: "science", 
    setup: "Rest in peace to boiling water...", 
    punchline: "You will be missed", 
    author_id: readersDigest.id
)
j50 = Joke.create(
    category: "sports", 
    setup: "Why did it get so hot in the baseball stadium after the game?", 
    punchline: "All of the fans left", 
    author_id: readersDigest.id 
)
j51 = Joke.create(
    category: "random", 
    setup: "What do you call a train carrying bubble gum?", 
    punchline: "A chew-chew train", 
    author_id: readersDigest.id
)
j52 = Joke.create(
    category: "programming", 
    setup: "How many programmers does it take to change a lightbulb?", 
    punchline: "None, its a hardware problem.", 
    author_id: unknown.id 
)
j53 = Joke.create(
    category: "technology", 
    setup: "Have you heard about the IT paradox?",
    punchline: "The warmer a computer gets, the more it freezes", 
    author_id: unknown.id
)
j54 = Joke.create(
    category: "movies", 
    setup: "Why did Thor lose his power of lightening as a teenager?", 
    punchline: "He was grounded.", 
    author_id: unknown.id 
)
j55 = Joke.create(
    category: "college", 
    setup: "College is really just kidnapping done backwards...", 
    punchline: "If you don't pay a ridiculous amount of money, they'll send your child back.", 
    author_id: unknown.id
)


# request RandomJokeApi.get ("https://official-joke-api.appspot.com/random_ten")
# jokes = JSON.parse(request)

# jokes.each do |joke|
#     Joke.find_or_create_by(setup: "joke['setup']") do |joke|
#         joke.category = joke['type'],
#         joke.punchline = joke['punchline']
#         joke.author_id = rand((Author.all.length)-1)+1
#     end
# end
