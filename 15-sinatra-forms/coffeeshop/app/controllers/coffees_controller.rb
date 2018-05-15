class CoffeesController < ApplicationController

  get "/coffees" do
    @coffees = Coffee.all
    erb :"coffees/index"
  end

  get "/coffees/new" do
    erb :"coffees/new"
  end

  get "/coffees/:id" do
    @coffee = Coffee.find(params[:id])
    erb :"coffees/show"
  end

  post "/coffees" do
    @coffee = Coffee.create(params[:coffee])
    redirect "/coffees/#{@coffee.id}"
  end

  get "/coffees/:id/edit" do
    @coffee = Coffee.find(params[:id])
    erb :"coffees/edit"
  end

  patch "/coffees/:id" do
    @coffee = Coffee.find(params[:id])
    @coffee.update(params[:coffee])
    redirect "/coffees/#{@coffee.id}"
  end

  delete "/coffees/:id" do
    @coffee = Coffee.find(params[:id])
    @coffee.delete
    redirect "/coffees"
  end
end
