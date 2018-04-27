require_relative 'avenger'
require_relative 'movie'
require_relative 'appearance'
require 'pry'

tony = Avenger.new("Tony Stark", "Iron Man")
thor = Avenger.new("Thor", "Lord of Thunder")
steve = Avenger.new("Steve Rogers", "Captain America")
peter = Avenger.new("Peter Parker", "Spider-Man")
scott = Avenger.new("Scott Lang", "Ant-Man")
loki = Avenger.new("Loki", "God of Mischief")
clint = Avenger.new("Clint Barton", "Hawkeye")
natasha = Avenger.new("Natasha Romanoff", "Black Widow")
carol = Avenger.new("Carol Danvers", "Captain Marvel")

im1 = Movie.new("Iron Man 1", 2008)
im2 = Movie.new("Iron Man 2", 2010)
thor_the_movie = Movie.new("Thor", 2011)
avengers = Movie.new("Avengers", 2012)
ca1 = Movie.new("Captain America", 2011)
guardians = Movie.new("Guardians of the Galaxy", 2013)
ant_man = Movie.new("Ant-Man", 2015)
spider_man = Movie.new("Spider-Man", 2017)
civil_war = Movie.new("Captain America: Civil War", 2016)
captain_marvel = Movie.new("Captain Marvel", 2018)

tony.appears_in(im1)
tony.appears_in(im2)
tony.appears_in(avengers)
tony.appears_in(civil_war)

thor.appears_in(thor_the_movie)
thor.appears_in(avengers)

steve.appears_in(avengers)
steve.appears_in(ca1)
steve.appears_in(civil_war)

scott.appears_in(ant_man)
scott.appears_in(civil_war)

loki.appears_in(thor_the_movie)
loki.appears_in(avengers)

clint.appears_in(thor_the_movie)
clint.appears_in(avengers)
clint.appears_in(civil_war)

natasha.appears_in(im2)
natasha.appears_in(avengers)
natasha.appears_in(civil_war)

carol.appears_in(captain_marvel)

Pry.start
