class Animal < ActiveRecord::Base
  belongs_to :section
  has_many :favorites
  has_many :visitors, through: :favorites
end
