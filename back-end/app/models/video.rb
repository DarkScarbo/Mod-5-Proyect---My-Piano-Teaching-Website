class Video < ApplicationRecord
    validates :url, presence: true
    has_one :review
    belongs_to :student, foreign_key: 'student_id', class_name: 'User'
end
