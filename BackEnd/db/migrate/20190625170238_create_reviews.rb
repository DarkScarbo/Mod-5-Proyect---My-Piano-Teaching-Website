class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :text
      t.references :video, foreign_key: true
      t.references :teacher, foreign_key: true

      t.timestamps
    end
  end
end
