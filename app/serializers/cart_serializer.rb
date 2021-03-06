class CartSerializer < ActiveModel::Serializer
  attributes :id, :user_id
  belongs_to :user
  has_many :products, serializer: ProductSerializer
end
