class Franchise < ApplicationRecord
  has_many :employees, dependent: :destroy
  has_many :franchise_specials
  has_many :specials, through: :franchise_specials

  validates :city, uniqueness: true, presence: true
end
