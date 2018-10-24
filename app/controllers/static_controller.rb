class StaticController < ApplicationController
  def home
    if session[:manager_id] != nil
      @current_user = Manager.find(session[:manager_id])
    else session[:client_id]
      @client = Client.find(session[:client_id])
    end

  end
end
