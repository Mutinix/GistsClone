class Favorite < ActiveRecord::Base
  attr_accessible :gist_id, :user_id

  belongs_to :gist, inverse_of: :favorites
  belongs_to :user, inverse_of: :favorites

  validates :gist_id, uniqueness: {scope: :user_id}
end
