class StaticController < ApplicationController
  def home
    if session[:manager_id]
      @Manager = Manager.find(session[:manager_id])
    end
  end
end
