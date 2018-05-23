class FranchisesController < ApplicationController
  before_action :get_franchise, only: [:show, :edit, :update, :destroy]
  before_action :get_specials, only: [:new, :edit]

  def index
    @franchises = Franchise.all
  end

  def show
  end

  def new
    @franchise = Franchise.new
  end

  def create
    @franchise = Franchise.create(franchise_params)
    if @franchise.valid?
      redirect_to @franchise
    else
      flash[:errors] = @franchise.errors.full_messages
      redirect_to new_franchise_path
    end
  end

  def edit
  end

  def update
    @franchise.update(franchise_params)
    if @franchise.valid?
      redirect_to @franchise
    else
      flash[:errors] = @franchise.errors.full_messages
      redirect_to edit_franchise_path(@franchise)
    end
  end

  def destroy
    @franchise.destroy
    redirect_to franchises_path
  end

  private

  def get_franchise
    @franchise = Franchise.find(params[:id])
  end

  def get_specials
    @specials = Special.all.sort_by {|s| s.price }
  end

  def franchise_params
    params.require(:franchise).permit(:city, special_ids: [])
  end
end
