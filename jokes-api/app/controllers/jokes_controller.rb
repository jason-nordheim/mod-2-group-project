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
        category: params[:category],
        setup: params[:setup],
        punchline: params[:punchline],
        author_id: Author.find_or_create_by(name: params[:author_id]).id
        )
      if @new_joke.save
        redirect_to "http://localhost:3001" 
      else 
        render status: 422
      end 
    else
      render status:422
    end 
  end 

  def update 
    @joke = Joke.find(params[:id])
      if @joke.update(
        setup: params[:setup],
        punchline: params[:punchline],
        category: params[:category],
        author_id: Author.find_or_create_by(name: params[:author_id]).id)
        if @joke.save 
          redirect_to "http://localhost:3001/admin.html"
        else
          render status: 422
        end 
      end
  end 

  def destroy
    @joke = Joke.find(params[:id])
    @joke.ratings.destroy_all
    @joke.destroy

    redirect_to "http://localhost:3001/admin.html"
  end
end
