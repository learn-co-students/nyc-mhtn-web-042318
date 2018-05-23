class Special < ApplicationRecord
  has_many :franchise_specials
  has_many :franchises, through: :franchise_specials

  validates :name, uniqueness: true, presence: true
end
