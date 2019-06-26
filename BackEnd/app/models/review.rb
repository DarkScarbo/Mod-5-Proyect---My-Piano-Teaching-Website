class Review < ApplicationRecord
  belongs_to :video
  belongs_to :teacher
end
