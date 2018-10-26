class ClientsController < ApplicationController
  def index
    @clients = Client.all
  end

  def new
    @client = Client.new
    @project = Project.new
  end

  def create # new users
    if session[:manager_id]
      @client = Client.new(client_params)
      if @client.save
        redirect_to client_path(@client)
      else
          flash[:message] = "Client name needs to be unique and present."
        redirect_to new_client_path
      end
    else
      redirect_to '/'
    end
  end

  def show
      @client = Client.find(params[:id])
  end

  def edit
    if session[:manager_id]
      @client = Client.find(params[:id])
    else
      redirect_to '/'
    end
  end

  def update
    if session[:manager_id]
      @client = Client.find(params[:id])
      @client.update(client_params)
      @client.save
    else
      redirect_to '/'
    end
  end

private

  def client_params
    params.require(:client).permit(:name, :email, :project_attributes [:name, :client_id, :manager_id])
  end
end
