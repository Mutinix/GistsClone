class UsersController < ApplicationController
  respond_to :json
  respond_to :html, only: [:new, :show]

  before_filter :redirect_logged_in_user, :only => [:new]

  def show
    @user = User.find(params[:id])
    @gists = @user.gists

    respond_with @gists, location: nil
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])

    if @user.save
      login_user(@user)
      redirect_to @user
    else
      flash.now[:errors] ||= []
      flash.now[:errors] << @user.errors.full_messages.to_sentence
      render :new
    end
  end
end
