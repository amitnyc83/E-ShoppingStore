class User < ApplicationRecord
  has_one :shipping_address
  has_one :cart

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, uniqueness: true

  has_secure_password

  def self.new_with_cart(params)
    user = User.new(params)
    user.build_cart
    user
  end
end
