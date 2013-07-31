class FavoritesController < ApplicationController
  respond_to :json

  def create
    @favorite = current_user.favorites.build(params[:favorite])
    @favorite.save
    respond_with @favorite, location: nil
  end

  def destroy
    @favorite = current_user.favorites.find_by_gist_id(params[:gist_id])
    @favorite.destroy
    render :nothing => true
  end

  def index
    @favorites = current_user.favorites
    respond_with @favorites
  end

end