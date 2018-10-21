class Manager < ActiveRecord::Base
  has_many :clients
  has_many :projects through: :clients
end
