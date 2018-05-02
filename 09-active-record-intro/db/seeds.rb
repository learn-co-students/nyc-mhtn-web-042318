
def create_movies
  Movie.create(name: "Alien", rating: 1)
  Movie.create(name: "Pan's Labyrinth", rating: 1)
  Movie.create(name: "Interstellar", rating: 1)
end

create_movies
puts "MADE YO MOVIES"
