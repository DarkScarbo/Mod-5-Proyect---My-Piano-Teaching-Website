class Video < ApplicationRecord
    has_one :review
    belongs_to :user
end
