class UsersController < ApplicationController
  # We auth all of our routes up here.
  before_action :requires_login, only: [:index, :show, :users_snacks]
  before_action :is_admin, only: [:index]

  def index
    render json: User.all
  end

  def show
    @user = User.find_by(id: params[:id])
    render json: @user
  end

  def create
    @user = User.new

    @user.username = params[:username]
    @user.password = params[:password]

    # If we're able to create the user...
    if (@user.save)
      # Send back a response with a new JWT.
      render json: {
        username: @user.username,
        id: @user.id,
        token: get_token(payload(@user.username, @user.id))
      }
    else
      # Otherwise, send back error messages & appropriate status code.
      render json: {
        errors: @user.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  def users_snacks
    # byebug
    @user = User.find_by(id: params[:user_id])

    render json: @user.snacks
  end

end
