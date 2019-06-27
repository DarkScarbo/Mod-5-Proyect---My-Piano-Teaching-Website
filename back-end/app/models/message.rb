class Message < ApplicationRecord
  has_one :user, foreign_key: 'student_id'
  has_one :user, foreign_key: 'teacher_id'
end
