class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users, except: [:created_at, :updated_at, :password_digest]
      end

    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user, include: [user.is_teacher? ? :reviews : :videos], except: [:created_at, :updated_at, :password_digest]
        else
            render json: {error: "User not found."}, status: 404
        end
    end

    def signin
        user = User.find_by(user: params[:user])
        if user && user.authenticate(params[:password])
            render json: { user: user.user, id: user.id }
        else
            render json: { error: 'Invalid user/password combination.'}, status: 401
        end
    end

    def signup
        user = User.new(user: params[:user], password: params[:password])
        if user.save
          render json: user
        else
          render json: {error: "User Already Taken!"}, status: 400
        end
    end
end
