class Visitor < ActiveRecord::Base
  has_many :favorites
  has_many :animals, through: :favorites
end
