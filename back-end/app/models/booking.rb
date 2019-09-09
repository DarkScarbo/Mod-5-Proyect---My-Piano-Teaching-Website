class Booking < ApplicationRecord
  validates :date, presence: true
  validates :starting, presence: true
  validates :ending, presence: true
  validates :ending, presence: true
  validates :student_name, presence: true
  validates :student_email, presence: true

  belongs_to :student, foreign_key: 'student_id', class_name: 'User'
  belongs_to :teacher, foreign_key: 'teacher_id', class_name: 'User'

end
