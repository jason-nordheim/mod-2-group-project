class CreateJokes < ActiveRecord::Migration[6.0]
  def change
    create_table :jokes do |t|
      t.string :category
      t.string :setup
      t.string :punchline
      t.references :author, null: false, foreign_key: true 

      t.timestamps
    end
  end
end
