class Client < ActiveRecord::Base
  has_many :managers
  belongs_to :project through: :clients
  has_secure_password
end
