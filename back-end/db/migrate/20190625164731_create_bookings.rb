class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.string :date
      t.string :confirmed
      t.string :starting
      t.string :ending
      t.integer :teacher_id
      t.integer :student_id
      t.string :student_name
      t.string :student_email

      t.timestamps
    end
  end
end
