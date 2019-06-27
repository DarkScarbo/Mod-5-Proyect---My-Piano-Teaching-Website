class AddTeacherIdToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :teacher_id, :integer
    add_index :messages, :teacher_id
  end
end
