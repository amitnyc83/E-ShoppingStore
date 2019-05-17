class User < ApplicationRecord
  has_one :shipping_address
  has_one :cart
  has_secure_password
end
