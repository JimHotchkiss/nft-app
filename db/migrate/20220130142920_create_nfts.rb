class CreateNfts < ActiveRecord::Migration[7.0]
  def change
    create_table :nfts do |t|
      t.string :token_id
      t.string :image_url
      t.string :background_color
      t.string :name
      t.string :external_link
      t.string :asset_contract
      t.string :owner
      t.string :traits
      t.string :last_sale

      t.timestamps
    end
  end
end
