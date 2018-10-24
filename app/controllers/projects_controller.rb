class ProjectsController < ApplicationController
  def index

  end

  def new
    @project = Project.new
    @client = Client.new
    @project.build_client
  end

  def create # new users
    if session[:manager_id] != nil
        @project = Project.new(project_params)
        if @project.save
          redirect_to project_path(@project)
        else
          redirect_to new_project_path
        end
    else
      redirect_to '/'
  end

  def show
      @project = Project.find(params[:id])
  end

  def edit
    if session[:manager_id]
      @project = Project.find(params[:id])
    else
      redirect_to '/'
    end
  end

  def update
    @project = Project.find(params[:id])
    @project.update(project_params)
    @project.save
  end

private

  def project_params
    params.require(:project).permit(:name, :completed, :manager_id, :client_id)
  end
end
