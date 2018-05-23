class SpecialsController < ApplicationController
  before_action :get_special, only: [:show, :edit, :update, :destroy]

  def index
    @specials = Special.all
  end

  def show
  end

  def new
    @special = Special.new
  end

  def create
    @special = Special.create(special_params)
    if @special.valid?
      redirect_to @special
    else
      flash[:errors] = @special.errors.full_messages
      redirect_to new_special_path
    end
  end

  def edit
  end

  def update
    @special.update(special_params)
    if @special.valid?
      redirect_to @special
    else
      flash[:errors] = @special.errors.full_messages
      redirect_to edit_special_path(@special)
    end
  end

  def destroy
    @special.destroy
    redirect_to specials_path
  end

  private

  def get_special
    @special = Special.find(params[:id])
  end

  def special_params
    params.require(:special).permit(:name, :price)
  end
end
