class AuthorsController < ApplicationController
  def index
    @authors = Author.all
    render json: @authors
  end 

  def show 
    if params[:id]
      @author = Author.find(params[:id])
      render json: @author
    else
      index()
    end
  end 

  def create 
    @author = Author.new(name: params[:name])
    if @author.save
      render json: @author
    else 
      render text: "Save failed"
    end
  end 

  def update 
    if params[:id]
      @rating.name = params[:name] 
      if @author.save
        render json: @author
      else
        render status: 422
      end
    else
      render status: 422
    end
  end 

end
