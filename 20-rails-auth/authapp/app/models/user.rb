class User < ApplicationRecord
  has_secure_password
  has_many :books
  
  validates :username, presence: true, uniqueness: true
end
