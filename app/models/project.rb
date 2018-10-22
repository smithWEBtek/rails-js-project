class Project < ActiveRecord::Base
  belongs_to :client
  belongs_to :manager through: :client


  #scope
  def completed_projects
    binding.pry
  end

end
