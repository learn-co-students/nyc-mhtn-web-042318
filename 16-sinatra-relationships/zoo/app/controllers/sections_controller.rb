class SectionsController < ApplicationController

  get "/sections" do
    @sections = Section.all
    erb :"sections/index"
  end

  get "/sections/new" do
    erb :"sections/new"
  end

  get "/sections/:id" do
    @section = Section.find(params[:id])
    erb :"sections/show"
  end

  post "/sections" do
    @section = Section.create(params[:section])
    redirect "/sections/#{@section.id}"
  end

  get "/sections/:id/edit" do
    @section = Section.find(params[:id])
    erb :"sections/edit"
  end

  patch "/sections/:id" do
    @section = Section.find(params[:id])
    @section.update(params[:section])
    redirect "/sections/#{@section.id}"
  end

  delete "/sections/:id" do
    @section = Section.find(params[:id])
    @section.delete
    redirect "/sections"
  end
end
