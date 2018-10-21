class Client < ActiveRecord::Base
  has_many :managers
  belongs_to :project through: :clients
end
