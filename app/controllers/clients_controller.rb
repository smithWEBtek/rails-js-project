class ClientsController < ApplicationController
  def index
    @clients = Client.all
  end

  def new
    @client = Client.new
  end

  def create # new users
    @client = Client.new(client_params)
    if @client.save
      session[:client_id] = @client.id
      redirect_to client_path(@client)
    else
      redirect_to new_client_path
    end
  end

  def show
    if session[:client_id]
      @client = Client.find(params[:id])
    else
      redirect_to '/'
    end
  end

  def edit
    @client = Client.find(params[:id])
  end

  def update

  end

private

  def client_params
    params.require(:client).permit(:name, :email)
  end

end
