class MessagesController < ApplicationController
    def index
        message = Message.all
        render json: message
    end

    def show
        message = Message.find_by(id: params[:id])
        if message
            render json: message
        else
            render json: {error: "Message not found."}, status: 404
        end
    end

    def create
        message = Message.new(text: params[:text], creator_id: params[:creator_id], student_id: params[:student_id], teacher_id: params[:teacher_id])
        if message.save
          render json: message
        else
          render json: {errors: message.errors.full_messages}, status: 400
        end
    end

end
