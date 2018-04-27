require "pry"

class Animal
  attr_accessor :num_legs, :warm_blooded, :diet, :cuteness

  ALL = []

  def initialize(num_legs, warm_blooded, diet, cuteness)
    @num_legs = num_legs
    @warm_blooded = warm_blooded
    @diet = diet
    @cuteness = cuteness

    ALL << self
  end

  def self.all
    ALL
  end

  def go_for_a_stroll
    "Walking on #{num_legs} legs!!"
  end

  def speak
    "Hello"
  end
end

class Mammal < Animal
  def initialize(num_legs, diet, cuteness)
    super(num_legs, true, diet, cuteness)
  end
end

# Dog inherits from Animal
# Dog extends Animal
# Dog is Animal's subclass
# Animal is Dog's superclass
# Animal is the parent class of Dog
# Dog is the child class of Animal
class Dog < Mammal
  def initialize(cuteness)
    super(4, "omnivore", cuteness)
  end

  def speak
    super + " woof"
  end
end

class Cat < Mammal
  def initialize(cuteness)
    super(4, "omnivore", cuteness)
  end

  def speak
    super + " meow"
  end
end

class Human < Mammal
  attr_accessor :name
  def initialize(name)
    super(2, "omnivore", 1)
    @name = name
  end
end

class Snake < Animal
  def initialize
    super(0, false, "carnivore", 0)
  end

  def go_for_a_stroll
    "slitherrr"
  end

  def speak
    super + " ssssssssssSSssSsSsssSs"
  end
end

german_shepard = Dog.new(1500)
shisha = Cat.new(1000000)
rishi = Human.new("rishi")
salazar = Snake.new

Pry.start
