class AnimalsController < ApplicationController

  get "/animals" do
    @animals = Animal.all
    erb :"animals/index"
  end

  get "/animals/new" do
    @sections = Section.all
    erb :"animals/new"
  end

  get "/animals/:id" do
    @animal = Animal.find(params[:id])
    erb :"animals/show"
  end

  post "/animals" do
    @animal = Animal.create(params[:animal])
    redirect "/animals/#{@animal.id}"
  end

  get "/animals/:id/edit" do
    @animal = Animal.find(params[:id])
    @sections = Section.all
    erb :"animals/edit"
  end

  patch "/animals/:id" do
    @animal = Animal.find(params[:id])
    @animal.update(params[:animal])
    redirect "/animals/#{@animal.id}"
  end

  delete "/animals/:id" do
    @animal = Animal.find(params[:id])
    @animal.delete
    redirect "/animals"
  end

end
