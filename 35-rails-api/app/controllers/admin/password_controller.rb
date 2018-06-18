class Admin::PasswordController < ApplicationController
    def reset
        render json:{stuff_about:'Reseeting passwords'}
    end
end