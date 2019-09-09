class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.text :url
      t.string :title
      t.text :description
      t.integer :student_id

      t.timestamps
    end
  end
end
