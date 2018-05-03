class Contract < ActiveRecord::Base
  belongs_to :trainer
  belongs_to :gym
end
