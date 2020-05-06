class JokesController < ApplicationController
  def index 
    @jokes = Joke.all 
    render json: @jokes, include: [:ratings, :author]
  end 

  def show 
    if params[:id]
      @joke = Joke.find(params[:id])
      render json: @joke, include: [:ratings, :author]
    else 
      index() 
    end 
  end 

  def create 
    if params[:setup] && params[:punchline] && params[:category] && params[:author_id]
      @new_joke = Joke.new(
        setup: params[:setup],
        punchline: params[:punchline],
        category: params[:category],
        author_id: Author.find_or_create_by(name: params[:author_id]).id
        )
      if @new_joke.save
        render json: @joke 
      else 
        render text: "Save failed"
      end 
    else
      render text: "Invalid number of arguments+"
    end 
  end 

  def update 
    if params[:id] 
      if params[:setup] && params[:punchline] && params[:category] && params[:author_id]
        @joke = Joke.find(params[:id])
        @joke.setup  = params[:setup]
        @joke.punchline = params[:punchline]
        @joke.category = params[:category]
        if @joke.save 
          render json: @joke
        else
          render text: "Failed to update Joke"
        end 
      else 
        render text: "Setup, Punchline, and Category are all required to update a jokes value"
      end 
    else
      render text: 'ID is required to update a joke value' 
    end 
  end 
end
