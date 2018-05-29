class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    if session[:user_id]
      User.find(session[:user_id])
    end
  end

  def logged_in?
    !!current_user
    # take the user object and convert it into a boolean
    # and then negate the boolean
  end

  def authorized
    redirect_to login_path if !logged_in?
  end
end
