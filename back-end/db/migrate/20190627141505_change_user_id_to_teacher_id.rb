class ChangeUserIdToTeacherId < ActiveRecord::Migration[5.2]
  def change
    rename_column :bookings, :user_id, :teacher_id
  end
end
