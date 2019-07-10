class Review < ApplicationRecord
  belongs_to :video
  belongs_to :teacher, foreign_key: 'teacher_id', class_name: 'User'
end
