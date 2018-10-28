class SessionsController < ApplicationController
  def new
    @manager = Manager.new
  end


    def create
      if auth_hash = request.env['omniauth.auth'] # log in omniauth
        binding.pry
         manager = Manager.find_or_create_by_omniauth(auth_hash)
         session[:manager_id] = manager.id
         redirect_to manager_path(manager)
      else
        @manager = Manager.find_by(email: params[:session][:email].downcase) #bcrypt login
          if @manager && @manager.authenticate(params[:session][:password])
              session[:manager_id] = @manager.id
              redirect_to manager_path(@manager)
          else
              flash[:danger] = 'Invalid email/password combination'
              render 'sessions/new'
          end
      end
    end

  #    auth = request.env["omniauth.auth"]
  #    @manager = Manager.find_by_provider_and_uid(auth["provider"], auth["uid"]) || User.create_with_omniauth(auth)
  #    session[:manager_id] = @manager.id
  #    redirect_to manager_path(@manager)
  #    if @manager.nil?
  #  end

  def destroy
    session.delete :manager_id
    redirect_to '/'
  end

private

  def auth
    request.env['omniauth.auth']
  end
end
