class Gym < ActiveRecord::Base
  has_many :contracts
  has_many :trainers, through: :contracts
  has_many :clients, through: :trainers
end
