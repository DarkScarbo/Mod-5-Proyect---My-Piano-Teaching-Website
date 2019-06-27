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
end
