class User < ApplicationRecord
  has_one: shipping_adress
  has_secure_password

end
