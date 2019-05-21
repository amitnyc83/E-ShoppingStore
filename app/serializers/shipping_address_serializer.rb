class ShippingAddressSerializer < ActiveModel::Serializer
  attributes :id, :address, :city, :state, :country, :zip_code
  has_one :user, serializer: UserSerializer
end
