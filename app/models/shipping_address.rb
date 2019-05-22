class ShippingAddress < ApplicationRecord
  has_one :user
  
  validates :address, :city, :state, :country, :zip_code, presence: true
  validates :user_id, presence: true
end
