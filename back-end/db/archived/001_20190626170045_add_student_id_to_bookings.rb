class AddStudentIdToBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :student_id, :integer
    add_index :bookings, :student_id
  end
end
