class Joke < ApplicationRecord
  belongs_to :author
  has_many :ratings 
end
