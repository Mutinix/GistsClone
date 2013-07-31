class GistsController < ApplicationController
  respond_to :json
  respond_to :html, only: [:root]

  def index
    @gists = Gist.all

    respond_with @gists, location: nil

  end

  def create
    @gist = current_user.gists.build(params[:gist])
    @gist.save!
    respond_with @gist, location: nil
  end

end
