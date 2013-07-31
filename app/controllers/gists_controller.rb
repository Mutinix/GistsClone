class GistsController < ApplicationController
  respond_to :json
  respond_to :html, only: [:root]

  def index
    @gists = Gist.all

    respond_with @gists, location: nil

  end
end
