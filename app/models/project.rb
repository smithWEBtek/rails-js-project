class Project < ActiveRecord::Base
  belongs_to :client
	belongs_to :manager
	
  validates :name, presence: true, uniqueness: true

  def self.completed
    where(completed: true)
  end
end
