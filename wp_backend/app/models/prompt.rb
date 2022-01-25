# == Schema Information
#
# Table name: prompts
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Prompt < ApplicationRecord
    validates :title, presence: true

    has_many :responses,
        primary_key: :id,
        foreign_key: :prompt_id,
        class_name: :Response
        
end
