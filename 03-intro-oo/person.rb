require 'pry'

# Add Code Here!
class Person
  attr_accessor :is_student, :name, :occupation, :age, :aaaaaa

  @@all = []
  
  def initialize(is_student, name, occupation, age, aaaaaa)
    @is_student = is_student
    @name = name
    @occupation = occupation
    @age = age
    @aaaaaa = aaaaaa

    @@all << self
  end

  def birthday!
    @age += 1
  end

  def self.all
    @@all
  end
end

Person.new(true, "Ryan", "student", 24, "aaaaa").birthday!
binding.pry
