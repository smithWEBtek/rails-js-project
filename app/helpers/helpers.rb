class Helpers < ActiveRecord::Base

  def self.current_manager(session)
    Manger.find_by_id(session[:manager_id])
  end

  def self.logged_in?(session)
    if Manager.find_by_id(session[:manager_id]) == nil
      false
    else
      true
    end
  end
end
