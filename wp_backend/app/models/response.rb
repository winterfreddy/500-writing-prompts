# == Schema Information
#
# Table name: responses
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  prompt_id  :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Response < ApplicationRecord
    validates :body, presence: true
    validate :check_response_length
    validates :prompt_id, presence: true
    validates :author_id, presence: true

    def check_response_length
        if self.body.length < 5
            errors[:body] << "response is too short, must be longer than 5 characters"
        elsif self.body.length > 1500
            errors[:body] << "response is too long, must be shorter than 1500 characters"
       end
    end

end
