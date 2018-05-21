class Cupcake < ApplicationRecord
  validates :flavor, presence: true, uniqueness: true
  validates :price, presence: true, numericality: { only_integer: true }
end
