require 'pry'

class Human
  attr_accessor :name, :loves_cats
  attr_reader :age

  @@all = []

  def initialize(name, age, loves_cats)
    @name = name
    @age = age
    @loves_cats = loves_cats

    @@all << self
  end

  def birthday!
    @age = @age + 1
  end

  def celebrate_birthday(place)
    birthday!
    puts "#{@name} parties hard at #{place} and turns #{@age}!"
  end

  def self.all
    @@all
  end
end

Human.new('alice a', 10, true)
Human.new('bob b', 11, false)
Human.new('carol c', 12, true)

binding.pry

Human.all

## How can we write these?
# let's say we want to get all human names
names = Human.all.map { |human| human.name }
