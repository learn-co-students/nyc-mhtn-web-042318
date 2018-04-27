# THIS CAN ALSO BE CALLED AvengerMovie or MovieAvenger, but we have
# a convenient name here
class Appearance
  attr_accessor :avenger, :movie

  ALL = []

  def initialize(avenger, movie)
    @avenger = avenger
    @movie = movie

    ALL << self
  end

  def self.all
    ALL
  end
end
