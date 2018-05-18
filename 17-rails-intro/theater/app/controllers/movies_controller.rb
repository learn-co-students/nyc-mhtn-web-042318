class MoviesController < ApplicationController


  def index
    @movies = Movie.all
  end

  def show
    byebug
    @movie = Movie.find(params[:id])
    puts "yO YO "

    puts "SOME MO"

    puts "ANOTHA ONE"
  end
end
