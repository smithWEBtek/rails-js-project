class Project < ActiveRecord::Base
  belongs_to :client
  belongs_to :manager
  validates :name, presence: true, uniqueness: true

  #scope
  def completed_projects

  end

end
