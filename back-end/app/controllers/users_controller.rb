class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users, except: [:created_at, :updated_at, :password_digest]
    end

    def show
        user = User.find_by(id: params[:id])
        if user
            if user.is_teacher?
                render json: user, include: [{students: {
                                            include: [:my_messages, :my_bookings, {videos: {include: [:review]}}], 
                                            except: [:password_digest, :created_at, :updated_at]}}],
                                    except: [:created_at, :updated_at, :password_digest]  
            else
                render json: user, include: [:my_bookings,:my_messages, {videos: {include: [:review]}}],
                                    except: [:created_at, :updated_at, :password_digest]
            end
        else
            render json: {error: "User not found."}, status: 404
        end

    end

    def login
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            render json: { name: user.name, token: issue_token({ id: user.id }), id: user.id, typeOfUser: user.typeOfUser}
        else
            render json: { error: 'Invalid email/password combination.'}, status: 401
        end
    end

    def signup
        user = User.new(name: params[:name], email: params[:email], password: params[:password], typeOfUser: "student", teacher_id: User.all.first.id)
        if user.save
          render json: user
        else
          render json: {errors: user.errors.full_messages}, status: 400
        end
    end

    def validate
        user = current_user
        if user
          render json: { name: user.name, token: issue_token({ id: user.id }), id: user.id, typeOfUser: user.typeOfUser }
        else
          render json: { error: 'User not found.' }, status: 404
        end
    end

    # def get_students_videos
    #     videos = User.generate_students_videos(params[:ids])

    #     if videos.length > 0
    #         render json: videos
    #     else
    #         render json: { error: 'Videos not found.' }, status: 404
    #     end
    # end
end
