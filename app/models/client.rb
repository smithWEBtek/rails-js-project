class Client < ActiveRecord::Base
  has_many :projects
  belongs_to :manager
  has_secure_password
end
