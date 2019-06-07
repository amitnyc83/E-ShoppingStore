class UsersController < ApplicationController

  def create
    @user = User.new_with_cart(user_params)
    if @user.save
      render json: @user, status: 201
    end
  end


  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    if @user.save
      render json: @user, status: 201
    end
  end


  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

end
