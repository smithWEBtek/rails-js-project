class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :projects
  belongs_to :manager
end
