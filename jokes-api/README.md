# Jokes API 
The jokes API is a Ruby on Rails API designed to support the functions of the front-end web application in the sibling directory `jokes-app`. Here we provide CRUD functionality for the data models that support the application: 

## Schema 
The schema can always be found in the sub-direcotry: `/jokes-api/db/schema.rb`, but for easy reference we have included it below: 

```rb
ActiveRecord::Schema.define(version: 2020_05_04_193859) do

  create_table "authors", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "jokes", force: :cascade do |t|
    t.string "category"
    t.string "setup"
    t.string "punchline"
    t.integer "author_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["author_id"], name: "index_jokes_on_author_id"
  end

  create_table "ratings", force: :cascade do |t|
    t.integer "joke_id", null: false
    t.integer "rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["joke_id"], name: "index_ratings_on_joke_id"
  end

  add_foreign_key "jokes", "authors"
  add_foreign_key "ratings", "jokes"
end
```

Since this is a Rails application, we are leverage Rails and ActiveRecord for our database. 

## Models 
For this application to be functional, we had 3 primary models: `jokes`, `authors` and `ratings`

### Jokes 
The joke model stores information about the joke, including a `setup` which would be the first part of the joke told if it was a joke that was being conveyed in conversation. The `punchline` is the part of the joke that expresses irony or results in laughter... it's what makes the joke funny. 

Importantly, we wanted to give credit to where we got the jokes from, so we have linked them to our `author` model via the `author_id`. 

### Authors
The `author` model represents someone who creates a joke. This simple serves as a way to give credit to the person who was witty enough to think of the joke, or to the website where we found the joke (yes, we seeded a few of our favorites). 

### Ratings 
Ratings allow end-users to give feedback on which jokes they find funniest. 

When a joke is deleted, all of the corresponding ratings are also deleted. So a rating cannot exist without a corresponding joke to be associated with. 