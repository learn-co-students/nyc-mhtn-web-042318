class ApplicationController < ActionController::API
  # Defined in our .env file.
  def secret_key
    ENV['SECRET_KEY']
  end

  # Helper method for making token.
  def payload(name, id)
    { name: name, id: id }
  end

  # How to create a JWT.
  def get_token(payload)
    JWT.encode payload, secret_key(), 'HS256'
  end

  # All the helper methods for JWT validation (auth).
  def authorization_token
    request.headers["Authorization"]
  end

  def decoded_token
    begin
      JWT.decode authorization_token(), secret_key(), true, { algorithm: 'HS256' }
    rescue JWT::VerificationError, JWT::DecodeError
      nil
    end
  end

  def valid_token?
    !!decoded_token
  end

  # Authentication (not authorization).
  def requires_login
    if !valid_token?
      render json: {
        message: 'You wrong!'
      }, status: :unauthorized
    end
  end

  # Authorization (not authentication).
  # Except this is just a really bad example.
  # Every account with id below 10 is an admin!
  def is_admin
    decoded_token[0]["id"] < 10
  end

  # Alternative method for doing authentication.
  # def authenticate(data)
  #   begin
  #     decoded_token()
  #     render json: data
  #   rescue JWT::DecodeError
  #     puts "I got here"
  #
  #     render json: {
  #       message: 'You wrong!'
  #     }, status: :unauthorized
  #   end
  # end
end
