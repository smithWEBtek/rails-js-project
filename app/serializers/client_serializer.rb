class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :manager_id
  has_many :projects
  belongs_to :manager
end
