class CreateShippingAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :shipping_addresses do |t|
      t.string :address
      t.string :city
      t.string :state
      t.string :country
      t.integer :zip_code

      t.timestamps
    end
  end
end
