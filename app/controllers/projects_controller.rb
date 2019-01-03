class ProjectsController < ApplicationController
  def index
		@completed_projects = Project.completed
		respond_to do |f|
			f.html {render :index}
			f.json {render json: @completed_projects}
		end
  end

  def new
    if session[:manager_id]
      @project = Project.new
      if params[:client_id]
        @client = Client.find(params[:client_id])
      end
    else
      redirect_to '/'
    end
  end

  def create # new manager
    if session[:manager_id]
        @project = Project.new(project_params)
        if @project.save
          redirect_to project_path(@project)
        else
          flash[:message] = "All Attributes must be filled in and the Project name needs to be unique."
          redirect_to new_project_path
        end
    else
      redirect_to '/'
    end
  end

  def show
			@project = Project.find(params[:id])
			respond_to do |f|
				f.html {render :show}
				f.json {render json: @project}
			end
  end

  def edit
    if session[:manager_id]
      @project = Project.find(params[:id])
    else
      redirect_to '/'
    end
  end

  def update
    if session[:manager_id]
      @project = Project.find(params[:id])
      @project.update(project_params)
      @project.save
      redirect_to project_path(@project)
    else
      redirect_to '/'
    end
  end

private

  def project_params
    params.require(:project).permit(:name, :completed, :manager_id, :client_id, :client_name)
  end
end
