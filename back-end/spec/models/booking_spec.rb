require 'rails_helper'

RSpec.describe Booking, type: :model do

booking_one = Booking.create( date: "15-09-2019", teacher_id: 1, student_id: 2, confirmed: "Yes", starting: "17:00", ending: "18:30", student_name: "Harriet", student_email: "harriet.ballantyne@gmail.com")

    it "has a confirmed column equal to Yes, No or an empty string" do
        expect(booking_one.confirmed).to eq("Yes") | eq("No") | eq("")
    end
    
    it "has a start time before the end time" do
        expect(booking_one.starting).to be < (booking_one.ending)
    end

    it "has a valid date" do
        current_date = Time.now.strftime("%d/%m/%Y %H:%M").split(" ").first
        current_date_reversed = current_date.split("/").reverse().join("-")
        booking_data_reversed = booking_one.date.split("-").reverse().join("-")
        expect(current_date_reversed).to be < (booking_data_reversed)
    end
end