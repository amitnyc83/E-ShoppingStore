class User < ApplicationRecord
  has_one :shipping_address
  has_one :cart

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, uniqueness: true

  has_secure_password

  def self.new_with_cart(user_params)
    user = User.new(user_params)
    user.build_cart
    user
  end


  private


  def user_params
    params.require(:user).permit(:password, :first_name, :last_name, :email)
  end
end
