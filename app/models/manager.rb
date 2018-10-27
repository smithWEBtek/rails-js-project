class Manager < ActiveRecord::Base
  has_many :projects
  has_many :clients, through: :projects
  validates :name, presence: true
  validates :password, presence: true
  validates_format_of :email, :with => /@/
  has_secure_password

  def self.create_with_omniauth(auth)
    create! do |manager|
      manager.provider = auth["provider"]
      manager.uid = auth["uid"]
      manager.name = auth["info"]["name"]
    end
  end
end
