class SessionsController < ApplicationController

  def create
    # Lookup user:
    @user = User.find_by(username: params["username"])

    # If the user exists and password is correct...
    if (@user && @user.authenticate(params["password"]))
      # Send back a JSON with a newly created token.
      render json: {
        username: @user.username,
        id: @user.id,
        token: get_token(payload(@user.username, @user.id))
      }
    else
      # Otherwise, send back an appropriate response & status code.
      render json: {
        errors: "Those credentials don't match anything we have in our database"
      }, status: :unauthorized
    end
  end

end
