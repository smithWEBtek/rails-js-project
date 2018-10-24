class StaticController < ApplicationController
  def home
    if session[:manager_id] != nil
      @current_user = Manager.find(session[:manager_id])
  end
end
