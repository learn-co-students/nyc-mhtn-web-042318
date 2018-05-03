class Trainer < ActiveRecord::Base
  has_many :clients
  has_many :contracts
  has_many :gyms, through: :contracts
end
