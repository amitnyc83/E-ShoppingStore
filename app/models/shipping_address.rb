class ShippingAddress < ApplicationRecord
  has_one :user

  validates :address, :city, :state, :country, :zip_code, presence: true
end
