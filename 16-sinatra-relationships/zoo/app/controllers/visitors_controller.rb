class VisitorsController < ApplicationController

    get "/visitors" do
      @visitors = Visitor.all
      erb :"visitors/index"
    end

    get "/visitors/new" do
      @animals = Animal.all
      erb :"visitors/new"
    end

    get "/visitors/:id" do
      @visitor = Visitor.find(params[:id])
      erb :"visitors/show"
    end

    post "/visitors" do
      @visitor = Visitor.create(params[:visitor])
      redirect "/visitors/#{@visitor.id}"
    end

    get "/visitors/:id/edit" do
      @visitor = Visitor.find(params[:id])
      @animals = Animal.all
      erb :"visitors/edit"
    end

    patch "/visitors/:id" do
      @visitor = Visitor.find(params[:id])
      @visitor.update(params[:visitor])
      redirect "/visitors/#{@visitor.id}"
    end

    delete "/visitors/:id" do
      @visitor = Visitor.find(params[:id])
      @visitor.delete
      redirect "/visitors"
    end
end
