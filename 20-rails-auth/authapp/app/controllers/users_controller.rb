class UsersController < ApplicationController
  before_action :authorized, only: [:edit]

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      session[:user_id] = @user.id
      redirect_to @user
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to signup_path
    end
  end

  def edit
    @user = User.find(params[:id])
    if current_user != @user
      redirect_to current_user
    end
    @books = Book.where(user_id: nil)
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_edit_params)
    if @user.valid?
      redirect_to books_path
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to edit_user_path(@user)
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end

  def user_edit_params
    params.require(:user).permit(:username, book_ids: [])
  end
end
