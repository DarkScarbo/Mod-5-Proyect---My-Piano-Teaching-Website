class AddStudentNameToBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :student_name, :string
  end
end
