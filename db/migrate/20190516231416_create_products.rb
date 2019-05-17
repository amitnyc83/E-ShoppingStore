class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.string :price
      t.string :image
      t.integer :cart_products_id
      t.timestamps
    end
  end
end
