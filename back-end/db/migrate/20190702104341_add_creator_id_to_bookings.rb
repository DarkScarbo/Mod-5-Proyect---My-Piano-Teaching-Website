class AddCreatorIdToBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :creator_id, :integer
  end
end
