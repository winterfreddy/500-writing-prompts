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
require 'test_helper'

class ResponseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
