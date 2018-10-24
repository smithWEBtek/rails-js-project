class Client < ActiveRecord::Base
  has_many :projects
  belongs_to :manager
  validates :name, presence: true, uniqueness: true


  #scope
  def completed_projects
    
  end
end
