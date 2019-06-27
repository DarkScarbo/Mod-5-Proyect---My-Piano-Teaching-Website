class User < ApplicationRecord
    validates :email, uniqueness: true
    has_secure_password
    has_many :videos
    has_many :reviews
    has_many :messages
    has_many :bookings
    
    # has_many :students, through: :bookings, source: 'user'
    # has_many :videos, through: :reviews

    has_many :students, class_name: "User", foreign_key: "teacher_id"
    belongs_to :teacher, foreign_key: 'teacher_id', class_name: 'User'

    def is_teacher?
        self.typeOfUser == "teacher"
    end

    # def getStudents()
    #     if is_teacher?
    #         User.all.select {|user| user.teacher_id == self.id}
    #     else
    #         puts "This user is a student."
    #     end
    # end
end
