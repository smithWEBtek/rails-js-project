class Manager < ActiveRecord::Base
  has_many :projects
  has_many :clients, through: :projects
  validates :name, presence: true
  validates :password, presence: true
  validates_format_of :email, :with => /@/
  has_secure_password

  def self.find_or_create_by_omniauth(auth_hash)
    oauth_email = auth_hash["info"]["eamil"]
    if manager = Manager.find_by(:email => oauth_email)
      return manager
    else
      manager = Manager.create(:email => oauth_email, :password => SecureRandom.hex)
    #  manager.provider = auth["provider"]
    #  manager.uid = auth["uid"]
    #  manager.name = auth["info"]["name"]
    end
  end
end
