class AddTeacherIdToBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :teacher_id, :integer
    add_index :bookings, :teacher_id
  end
end
