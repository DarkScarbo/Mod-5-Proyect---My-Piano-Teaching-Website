class AddStudentIdToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :student_id, :integer
    add_index :messages, :student_id
  end
end
