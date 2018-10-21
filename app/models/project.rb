class Project < ActiveRecord::Base
  belongs_to :client
  belongs_to :manager through: :client
end
