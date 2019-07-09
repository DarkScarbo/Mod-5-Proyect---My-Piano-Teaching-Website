class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.date :date
      t.string :confirmed
      t.string :starting
      t.string :ending
      t.timestamps
    end
  end
end
