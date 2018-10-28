class Client < ActiveRecord::Base
  has_many :projects
  belongs_to :manager
  validates :name, presence: true, uniqueness: true
  accepts_nested_attributes_for :projects

  def projects_attributes=(attributes)
    #raise projects_attributes
  end

  def completed_projects
    self.projects.where(completed: true)
  end

  def uncompleted_projects
    self.projects.where(completed: false)
  end
end
