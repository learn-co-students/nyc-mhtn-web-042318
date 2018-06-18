class CatSerializer < ActiveModel::Serializer
  attributes :name
  belongs_to :owner
end