class BookingsController < ApplicationController
    def index
        bookings = Booking.all
        render json: bookings
    end

    def show
        booking = Booking.find_by(id: params[:id])
        if user
            render json: booking
        else
            render json: {error: "Booking not found."}, status: 404
        end
    end

    def create
        booking = Booking.new(date: params[:date], starting: params[:starting], ending: params[:ending], confirmed: params[:confirmed], student_id: params[:student_id], creator_id: params[:creator_id], teacher_id: User.all.first.id)
        if booking.save
          render json: booking
        else
          render json: {errors: booking.errors.full_messages}, status: 400
        end
    end

end
