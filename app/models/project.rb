class Project < ActiveRecord::Base
  belongs_to :client, required: false
  belongs_to :manager
  validates :name, presence: true, uniqueness: true
end
