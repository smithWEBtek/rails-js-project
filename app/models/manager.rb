class Manager < ActiveRecord::Base
  has_many :clients
  has_many :projects through: :clients
  has_secure_password
end
