class CartProductsSerializer < ActiveModel::Serializer
  attributes :id, :cart_id, :product_id
  has_one :cart 
  has_many :products
end
