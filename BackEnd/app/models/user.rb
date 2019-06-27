class User < ApplicationRecord
    has_secure_password
    has_many :videos
    has_many :messages
    has_many :bookings
    has_many :students, through: :bookings, source: 'user'
    has_many :videos, through: :reviews

    has_many :students, class_name: "User", foreign_key: "teacher_id"

    def getStudents()
        if self.typeOfUser == "teacher"
            User.all.select{|user| user.teacher_id == self.id}
        else
            puts "This user is a student."
        end
    end
end
