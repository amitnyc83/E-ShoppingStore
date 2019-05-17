class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password
  has_one :cart
  has_one :shipping_address
end
