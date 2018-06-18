class Api::V2::OwnersController < ApplicationController
    def index
        render json: {message:'There are not more cat owners in the universe'}
    end

    def create
        owner = Owner.create(owner_params)
        # byebug
        # owner = Owner.new
        # owner.name = params[:name]
        # owner.save
        render json: owner
    end

    private
    def owner_params
        params.permit(:name)
    end
end