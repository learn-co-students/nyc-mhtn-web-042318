class CupcakesController < ApplicationController
  before_action :get_cupcake, only: [:show, :edit, :update, :destroy]

  def index
    @cupcakes = Cupcake.all
  end

  def show
  end

  def new
    @cupcake = Cupcake.new
  end

  def create
    # @cupcake = Cupcake.new(cupcake_params)
    # if @cupcake.valid?
    #   @cupcake.save
    #   redirect_to @cupcake
    # else
    #   #whatever
    # end

    @cupcake = Cupcake.create(cupcake_params)
    if @cupcake.valid?
      redirect_to @cupcake
    else
      flash[:errors] = @cupcake.errors.full_messages
      flash[:cupcake] = @cupcake
      redirect_to new_cupcake_path
    end
  end

  def edit
  end

  def update
    @cupcake.update(cupcake_params)
    if @cupcake.valid?
      redirect_to @cupcake
    else
      flash[:errors] = @cupcake.errors.full_messages
      redirect_to edit_cupcake_path(@cupcake)
    end
  end

  def destroy
    @cupcake.destroy
    redirect_to cupcakes_path
  end

  private

  def cupcake_params
    params.require(:cupcake).permit(:flavor, :price)
  end

  def get_cupcake
    @cupcake = Cupcake.find(params[:id])
  end
end
