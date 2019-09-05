class AddStudentEmailToBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :student_email, :string
  end
end
