 class SnacksController < ApplicationController
  before_action :requires_login, only: [:index]

  def index
    render json: Snack.all
  end

end
