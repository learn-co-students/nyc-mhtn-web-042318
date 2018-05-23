class Franchise < ApplicationRecord
  has_many :employees, dependent: :destroy

  validates :city, uniqueness: true, presence: true
end
