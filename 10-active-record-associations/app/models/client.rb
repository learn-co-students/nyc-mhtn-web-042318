class Client < ActiveRecord::Base
  belongs_to :trainer
  has_many :gyms, through: :trainer
end
