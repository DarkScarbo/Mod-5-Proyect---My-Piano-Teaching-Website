class Message < ApplicationRecord
  # has_one :user, foreign_key: 'student_id'
  # has_one :user, foreign_key: 'teacher_id'
  belongs_to :teacher, foreign_key: 'teacher_id', class_name: 'User'
  belongs_to :student, class_name: "User", foreign_key: "student_id"

end
