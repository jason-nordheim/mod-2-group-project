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

  def destroy
    @rating = Rating.find(params[:id])
    @rating.destroy
  end
end