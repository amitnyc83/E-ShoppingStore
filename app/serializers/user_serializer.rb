class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password
  has_one :cart, serializer: CartSerializer
  has_one :shipping_address, serializer: ShippingAddressSerializer
end
