class Teacher < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :messages
    has_many :bookings
    has_many :videos, through: :reviews
end
