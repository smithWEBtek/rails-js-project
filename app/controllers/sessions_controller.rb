class SessionsController < ApplicationController
  def new
    @manager = Manager.new
  end

  def create
    @manager = Manager.find_by(email: params[:session][:email].downcase)
     if @manager && @manager.authenticate(params[:session][:password])
        redirect_to manager_path(@manager)
     else
       flash[:danger] = 'Invalid email/password combination'
       render 'new'

  #  @manager = Manager.find_or_create_by(uid: auth['uid']) do |u|
    #  u.name = auth['info']['name']
    #  u.email = auth['info']['email']
    #  u.image = auth['info']['image']
    end
  end

  def destroy
    #Manager.find(session[:manager_id]).destroy
    session.delete :manager_id
    @current_manager = nil
    redirect_to '/'
  end

private

  def auth
    request.env['omniauth.auth']
  end
end
