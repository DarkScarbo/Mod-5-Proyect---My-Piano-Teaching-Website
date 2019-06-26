class Student < ApplicationRecord
    has_secure_password
    has_many :videos
    has_many :messages
    has_many :bookings
    has_many :teachers, through: :messages
end
