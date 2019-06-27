class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.date :date
      t.string :confirmed
      t.datetime :starting
      t.datetime :ending
      t.timestamps
    end
  end
end
