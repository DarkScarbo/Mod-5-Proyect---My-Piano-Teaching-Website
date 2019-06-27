class VideosController < ApplicationController
    def index
        videos = Video.all
        render json: videos
    end

    def show
        video = Video.find_by(id: params[:id])
        if video
            render json: video
        else
            render json: {error: "Video not found."}, status: 404
        end
    end

end
