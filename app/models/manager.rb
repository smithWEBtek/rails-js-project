class Manager < ActiveRecord::Base
  has_many :projects
  has_many :clients, through: :projects
  has_secure_password
  validates :name, presence: true, uniqueness: true
  validates_uniqueness_of :email, presence: true, uniqueness: true
end
