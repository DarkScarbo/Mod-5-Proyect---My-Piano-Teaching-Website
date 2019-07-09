class Video < ApplicationRecord
    validates :url, presence: true
    has_one :review
    belongs_to :user
end
