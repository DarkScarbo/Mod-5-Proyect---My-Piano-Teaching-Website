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

end
