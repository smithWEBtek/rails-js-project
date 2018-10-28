class SessionsController < ApplicationController
  def new
    @manager = Manager.new
  end


    def create
      if request.env["omniauth.auth"] # log in omniauth
          @manager = Manager.find_or_create_by(uid: auth['uid']) do |u|
            u.name = auth['info']['name']
            u.email = auth['info']['email']
            u.image = auth['info']['image']
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

      auth = request.env["omniauth.auth"]
      @manager = Manager.find_by_provider_and_uid(auth["provider"], auth["uid"]) || User.create_with_omniauth(auth)
      session[:manager_id] = @manager.id
      redirect_to manager_path(@manager)
      if @manager.nil?
    end

  def destroy
    session.delete :manager_id
    redirect_to '/'
  end

private

  def auth
    request.env['omniauth.auth']
  end
end
