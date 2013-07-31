class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id

  belongs_to :user, inverse_of: :gists

  validates :user, :title, presence: true
end
