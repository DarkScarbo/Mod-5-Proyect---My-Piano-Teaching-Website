class RemoveCreatorIdFromBookings < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :creator_id, :string
  end
end
