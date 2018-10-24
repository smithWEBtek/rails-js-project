class Project < ActiveRecord::Base
  belongs_to :client
  belongs_to :manager


  #scope
  def completed_projects

  end

end
