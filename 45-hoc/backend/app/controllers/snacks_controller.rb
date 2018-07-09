 class SnacksController < ApplicationController
   # We auth all of our routes up here.
  before_action :requires_login, only: [:index]

  def index
    render json: Snack.all
  end

end
