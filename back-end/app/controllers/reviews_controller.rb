class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        review = Review.find_by(id: params[:id])
        if review
            render json: review
        else
            render json: {error: "Review not found."}, status: 404
        end
    end

    def create
        review = Review.new(text: params[:text], video_id: params[:video_id], teacher_id: params[:teacher_id])
        if review.save
          render json: review
        else
          render json: {errors: review.errors.full_messages}, status: 400
        end
    end 
end
