class ManagersController < ApplicationController
  def index

  end

  def new
    @manager = Manager.new
  end

  def create # new manager
    @manager = Manager.new(manager_params)
    if @manager.save
      session[:manager_id] = @manager.id
      redirect_to manager_path(@manager)
    else
      redirect_to new_manager_path
    end
  end

  def show
    if session[:manager_id]
      @manager = Manager.find(params[:id])
      @project = Project.new
    else
      redirect_to '/'
    end
  end

  def edit
    @manager = Manager.find(params[:id])
  end

  def update
      @manager = Manager.find(params[:id])
      @manager.update(manager_params)
      @manager.save
      redirect_to manager_path(@manager)
  end

private

  def manager_params
    params.require(:manager).permit(:name, :password, :email)
  end
end
