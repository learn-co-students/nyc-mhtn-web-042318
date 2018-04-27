class Avenger
  attr_accessor :name, :alter_ego

  ALL = []

  def initialize(name, alter_ego)
    @name = name
    @alter_ego = alter_ego

    ALL << self
  end

  def self.all
    ALL
  end

  def appears_in(movie)
    Appearance.new(self, movie)
  end

  def appearances
    Appearance.all.select do |appearance|
      appearance.avenger == self
    end
  end

  def movies
    appearances.map do |appearance|
      appearance.movie
    end
  end
end
