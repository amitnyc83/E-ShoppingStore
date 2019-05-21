class Product < ApplicationRecord
  has_many :cart_products
  has_many :carts, through: :cart_products

  validates :name, presence: true
  validates :price, presence: true
  validates :description, presence: true 
end
