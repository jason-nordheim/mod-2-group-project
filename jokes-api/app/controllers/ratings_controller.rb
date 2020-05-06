class RatingsController < ApplicationController
  def index 
    @ratings = Rating.all 
    render json: @ratings
  end 
  def show 
    if params[:id]
      @rating = Rating.find(params[:id])
      render json: @rating, include: [:ratings]
    else 
      index() 
    end 
  end 
  def create 
    if params[:rating] && params[:joke_id]
      @rating = Rating.new(rating: params[:rating], joke_id: params[:joke_id])
      if @rating.save
        redirect_to "http://localhost:3001/index"
      else 
        render text: "Rating failed"
      end 
    else
      render text: "Invalid number of arguments+"
    end 
  end 
  def update 
    if params[:id] 
      if params[:setup] && params[:punchline] && params[:category]
        @rating = Joke.find(params[:id])
        @rating.setup  = params[:setup]
        @rating.punchline = params[:punchline]
        @rating.category = params[:category]
        if @rating.save 
          render json: @rating
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
