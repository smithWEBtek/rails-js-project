class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :completed, :manager_id, :client_id
  belongs_to :client
  belongs_to :manager
end
