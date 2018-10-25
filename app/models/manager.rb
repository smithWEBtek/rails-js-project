class Manager < ActiveRecord::Base
  has_many :projects
  has_many :clients, through: :projects
  has_secure_password
  validates :name, presence: true
  validates :password, presence: true
  validates_format_of :email, :with => /@studio/

end
