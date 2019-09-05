class BookingsController < ApplicationController
    def index
        bookings = Booking.all
        render json: bookings
    end

    def show
        booking = Booking.find_by(id: params[:id])
        if booking
            render json: booking
        else
            render json: {error: "Booking not found."}, status: 404
        end
    end

    def create
        booking = Booking.new(date: params[:date], starting: params[:starting], ending: params[:ending], confirmed: params[:confirmed], teacher_id: User.all.first.id,student_id: params[:student_id], student_name: params[:student_name], student_email: params[:student_email])
        if booking.save
          render json: booking
        else
          render json: {errors: booking.errors.full_messages}, status: 400
        end
    end

    def update
        booking = Booking.find_by(id: params[:id])
        if booking.update(confirmed: params[:confirmed])
            render json: booking
        end
    end


end
