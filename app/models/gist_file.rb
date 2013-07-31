class GistFile < ActiveRecord::Base
  attr_accessible :body, :gist_id, :name

  belongs_to :gist, inverse_of: :gistfiles

  validates :gist, :name, :body, presence: true
end
