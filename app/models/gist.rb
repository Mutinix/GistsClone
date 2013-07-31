class Gist < ActiveRecord::Base

  attr_accessible :title, :user_id

  belongs_to :user, inverse_of: :gists
  has_many :favorites, dependent: :destroy, inverse_of: :gist
  has_many :favorited_users, through: :favorites, source: :user
  has_many :gistfiles

  validates :user, :title, presence: true


  def as_json(options = {})
    super(options.merge(include: [:favorites]))
  end
end
