class OwnerSerializer < ActiveModel::Serializer
  attributes :name, :id
  has_many :cats
end