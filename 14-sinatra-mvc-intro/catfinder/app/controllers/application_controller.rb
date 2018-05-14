require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get "/hello/:name" do
    "HELLO #{params[:name].upcase}!!!!!!!!"
  end

  get "/cats" do
    @cats = Cat.all.sort_by { |cat| cat.name }
    erb :"cats/index"
  end

  get "/cats/:id" do
    @cat = Cat.find(params[:id])
    erb :"cats/show"
  end



end
