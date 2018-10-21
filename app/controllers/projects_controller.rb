class ProjectsController < ApplicationController
  def index

  end

  def new
    @project = Project.new
  end

  def create # new users
    @project = Project.new(project_params)
    if @project.save
      redirect_to project_path(@project)
    else
      redirect_to new_project_path
    end
  end

  def show
    if session[:manager_id]
      @project = Project.find(params[:id])
    else
      redirect_to '/'
    end
  end

  def update

  end

private

  def project_params
    params.require(:project).permit(:, :)
  end

end
end
