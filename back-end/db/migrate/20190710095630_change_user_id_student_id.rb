class ChangeUserIdStudentId < ActiveRecord::Migration[5.2]
  def change
    rename_column :videos, :user_id, :student_id
  end
end
