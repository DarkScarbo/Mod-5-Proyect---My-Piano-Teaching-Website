class User < ApplicationRecord
    validates :email, uniqueness: true
    has_secure_password
    has_many :videos
    has_many :reviews
    has_many :messages
    has_many :bookings

    has_many :students, class_name: "User", foreign_key: "teacher_id"
    belongs_to :teacher, foreign_key: 'teacher_id', class_name: 'User', optional: true
    validate :teacher_relationship_exists?

    def is_teacher?
        self.typeOfUser == "teacher"
    end

    def teacher_relationship_exists?
        if !self.is_teacher? && !self.teacher
            errors.add(:teacher, "must exist")
        end
    end

    def my_messages
        if self.is_teacher?
            Message.where(teacher_id: self.id)
        else
            Message.where(student_id: self.id)
        end
    end
    # has_many :students, through: :bookings, source: 'user'
    # has_many :videos, through: :reviews

    # def getStudents()
    #     if is_teacher?
    #         User.all.select {|user| user.teacher_id == self.id}
    #     else
    #         puts "This user is a student."
    #     end
    # end
end
